import React, { useState } from 'react';
import Nav from '../Nav';
import './MyListScreen.scss';
import '../Row.scss';
import MovieInfo from '../MovieInfo';

const MyListScreen = ({ myList }) => {
  const [visibleId, setVisibleId] = useState('');
  const showPar = false;
  return (
    <>
      <Nav />
      <section className='myListScreen row'>
        <h1>My List</h1>
        <div className='myListScreen__wrapper row__posters'>
          {myList.map((item) => {
            console.log(item);
            const id = item.id;
            const className = id === visibleId ? 'visible' : 'hidden';
            return (
              <div
                key={item.id}
                className=' myListScreen__poster row__poster'
                id={item.id}
                onMouseEnter={(e) => setVisibleId(e.currentTarget.id)}
                onMouseLeave={() => setVisibleId('')}
              >
                <img
                  className={`row__posterImg ${
                    id === visibleId && 'imageHovered'
                  }`}
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}?=${process.env.REACT_APP_API_KEY}}`}
                  alt={item.title || item.original_title || item.name}
                />
                <MovieInfo
                  movie={item}
                  className={className}
                  id={id}
                  showPar={showPar}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyListScreen;
