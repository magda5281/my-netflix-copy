import React, { useEffect } from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import './MovieDetails.scss';

// Pop-up with more information about one movie or series.
// Closes on the X button, a click outside the box, or the Escape key.
const MovieDetails = ({ movie, onClose, onAdd, onRemove }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!movie) return null;

  const title = movie.title || movie.name || movie.original_title;
  const date = movie.release_date || movie.first_air_date;
  const year = date ? date.slice(0, 4) : null;
  const type = movie.media_type === 'tv' || movie.first_air_date ? 'Series' : 'Film';
  const image = movie.backdrop_path || movie.poster_path;

  return (
    <div className='movieDetails' onClick={onClose} role='dialog' aria-modal='true' aria-label={title}>
      <div className='movieDetails__box' onClick={(e) => e.stopPropagation()}>
        <button className='movieDetails__close' onClick={onClose} aria-label='Close'>
          <FaTimes />
        </button>
        {image && (
          <img
            className='movieDetails__image'
            src={`https://image.tmdb.org/t/p/w780${image}`}
            alt={title}
          />
        )}
        <div className='movieDetails__content'>
          <h2 className='movieDetails__title'>{title}</h2>
          <div className='movieDetails__meta'>
            {movie.vote_average ? (
              <span className='movieDetails__rating'>
                ★ {movie.vote_average.toFixed(1)} / 10
              </span>
            ) : null}
            {year && <span>{year}</span>}
            <span>{type}</span>
          </div>
          <p className='movieDetails__overview'>
            {movie.overview || 'No description available.'}
          </p>
          {onAdd && (
            <button className='movieDetails__action' onClick={() => onAdd(movie)}>
              <FaPlus /> Add to My List
            </button>
          )}
          {onRemove && (
            <button className='movieDetails__action' onClick={() => onRemove(movie)}>
              <FaMinus /> Remove from My List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
