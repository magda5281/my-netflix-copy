import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import MovieDetails from '../MovieDetails';
import { requests } from '../api/requests';
import { addToList } from '../myList';
import Loader from 'react-loader-spinner';

// One screen for all four tabs. `tab` is 'home', 'tv', 'movies' or 'new'
// and decides which rows (see api/requests.js) are loaded.
const HomeScreen = ({ user, tab = 'home' }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!user) return;
    let cancelled = false; // ignore results if the user switches tab mid-load

    const fetchData = async () => {
      setLoading(true);
      try {
        const rows = requests.filter((r) => r.tabs.includes(tab));
        const newData = await Promise.all(
          rows.map(async (request) => {
            const response = await fetch(request.api);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseJson = await response.json();
            return { ...request, data: responseJson.results || [] };
          })
        );
        if (!cancelled) setData(newData);
      } catch (err) {
        console.error('ERROR fetching data!', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
    return () => {
      cancelled = true;
    };
  }, [user, tab]);

  const handleAdd = (movie) => {
    addToList(movie);
    setSelected(null);
  };

  if (loading) {
    return (
      <>
        <Nav />
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        </div>
      </>
    );
  }

  const bannerRow = data.find((row) => row.banner);

  return (
    <>
      <Nav />
      {bannerRow && <Banner movies={bannerRow.data} onShowDetails={setSelected} />}
      <section className='rows'>
        {data
          .filter((row) => !row.banner)
          .map((row) => (
            <Row
              key={row.key}
              title={row.title}
              movies={row.data}
              large={row.large}
              onShowDetails={setSelected}
            />
          ))}
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
          created for learning purposes.
        </p>
      </footer>
      <MovieDetails movie={selected} onClose={() => setSelected(null)} onAdd={handleAdd} />
    </>
  );
};

export default HomeScreen;
