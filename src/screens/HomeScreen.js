import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import { requests } from '../api/requests';
import Loader from 'react-loader-spinner';

const HomeScreen = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const newData = await Promise.all(
        requests.map(async (request) => {
          const response = await fetch(request.api, {
            headers: { Authorization: process.env.REACT_APP_API_KEY },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const responseJson = await response.json();

          return { ...request, data: responseJson.results };
        })
      );

      setData(newData);
    } catch (err) {
      console.error('ERROR fetching data!', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  if (loading) {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} //3 secs
          margin='0 auto'
        />
      </div>
    );
  }

  return (
    <>
      <Nav />
      {data.map((el) => {
        return (
          el.key === 'trendingToday' && <Banner key={el.api} movies={el.data} />
        );
      })}
      <section className='rows'>
        {data.map((element) => {
          return (
            element.key !== 'trendingToday' && (
              <Row
                key={element.api}
                title={element.title}
                movies={element.data}
                rowTitle={element.key}
                user={user}
              />
            )
          );
        })}
      </section>
      <footer
        style={{
          textAlign: 'center',
          padding: '10px',
          color: 'white',
          fontSize: '12px',
        }}
      >
        <p>
          This project is a <strong>non-commercial, educational project</strong>{' '}
          created for learning purposes. It is not affiliated with Netflix, Inc.
        </p>
      </footer>
    </>
  );
};

export default HomeScreen;
