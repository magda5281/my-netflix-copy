import React, { useEffect, useState } from 'react';
import './Banner.scss';
import './genericStyles/icon.scss';

import { FaInfoCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Banner = ({ movies, onShowDetails }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Pick a random title for the header. (The old formula, random * length - 1,
    // could return -1 and leave the banner empty.)
    const withImages = movies.filter((m) => m.backdrop_path);
    setMovie(withImages[Math.floor(Math.random() * withImages.length)] || null);
  }, [movies]);

  // Shortens the description to n characters and adds "..."
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: movie
          ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
          : 'none',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        {movie && (
          <button className='banner__button' onClick={() => onShowDetails(movie)}>
            <IconContext.Provider value={{ className: 'icon' }}>
              <FaInfoCircle />
            </IconContext.Provider>
            More info
          </button>
        )}
        <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
};
export default Banner;
