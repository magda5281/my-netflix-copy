import React, { useState } from 'react';
import Nav from '../Nav';
import './MyListScreen.scss';
import '../Row.scss';
import MovieInfo from '../MovieInfo';
import MovieDetails from '../MovieDetails';
import { removeFromList } from '../myList';

const MyListScreen = ({ myList }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleRemove = (movie) => {
    removeFromList(movie);
    setSelected(null);
  };

  return (
    <>
      <Nav />
      <section className='myListScreen row'>
        <h1>My List</h1>
        {myList.length === 0 && (
          <p className='myListScreen__empty'>
            Your list is empty. Hover a title on the home page and press + to add it.
          </p>
        )}
        <div className='myListScreen__wrapper row__posters'>
          {myList.map((item) => {
            const isHovered = item.id === hoveredId;
            return (
              <div
                key={item.id}
                className='myListScreen__poster row__poster'
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  className={`row__posterImg ${isHovered ? 'imageHovered' : ''}`}
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                  alt={item.title || item.original_title || item.name}
                  onClick={() => setSelected(item)}
                />
                <MovieInfo
                  movie={item}
                  className={isHovered ? 'visible' : 'hidden'}
                  onRemove={removeFromList}
                  onShowDetails={setSelected}
                  showPar={false}
                />
              </div>
            );
          })}
        </div>
      </section>
      <MovieDetails movie={selected} onClose={() => setSelected(null)} onRemove={handleRemove} />
    </>
  );
};

export default MyListScreen;
