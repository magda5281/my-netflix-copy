import React, { useState } from 'react';
import MovieInfo from './MovieInfo';
import { addToList } from './myList';
import './Row.scss';
import './genericStyles/icon.scss';

const Row = ({ title, movies, large, onShowDetails }) => {
  // ID of the poster the mouse is over. Kept as the movie's own id (a number);
  // the old code read it back from the page as text, so "123" never equalled 123
  // and the info panel never appeared.
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className='rows' style={{ position: 'relative' }}>
      <div className='row'>
        <h2 className='row__title'>{title}</h2>
        <div className='row__posters'>
          {movies.map((movie) => {
            const isHovered = movie.id === hoveredId;
            const image = large ? movie.poster_path : movie.backdrop_path;
            if (!image) return null;
            return (
              <div
                key={movie.id}
                className='row__poster'
                onMouseEnter={() => setHoveredId(movie.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  className={`row__posterImg ${large ? 'row__posterLarge' : ''} ${
                    isHovered ? 'imageHovered' : ''
                  }`}
                  src={`https://image.tmdb.org/t/p/w500${image}`}
                  alt={movie.title || movie.original_title || movie.name}
                  onClick={() => onShowDetails(movie)}
                />
                <MovieInfo
                  movie={movie}
                  className={isHovered ? 'visible' : 'hidden'}
                  onAdd={addToList}
                  onShowDetails={onShowDetails}
                  showPar={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Row;
