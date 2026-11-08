import React from 'react';
import './MovieInfo.scss';
import './genericStyles/icon.scss';
import { FaPlusCircle, FaMinusCircle, FaChevronCircleDown } from 'react-icons/fa';

// Small panel shown under a poster while it is hovered.
// onAdd / onRemove: add or remove this movie from "My List" (only one is passed).
// onShowDetails: open the details pop-up for this movie.
const MovieInfo = ({ movie, className, onAdd, onRemove, onShowDetails, showPar }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const title = movie?.title || movie?.name || movie?.original_title;

  return (
    <div className={`movieInfo ${className}`}>
      <div className='movieInfo__IconsWrap'>
        <div className='movieInfo__left'>
          {onAdd && (
            <button
              className='movieInfo__iconBtn'
              onClick={() => onAdd(movie)}
              aria-label={`Add ${title} to My List`}
              title='Add to My List'
            >
              <FaPlusCircle className='icon icon--movieInfo' />
            </button>
          )}
          {onRemove && (
            <button
              className='movieInfo__iconBtn'
              onClick={() => onRemove(movie)}
              aria-label={`Remove ${title} from My List`}
              title='Remove from My List'
            >
              <FaMinusCircle className='icon icon--movieInfo' />
            </button>
          )}
        </div>
        <button
          className='movieInfo__iconBtn'
          onClick={() => onShowDetails(movie)}
          aria-label={`More info about ${title}`}
          title='More info'
        >
          <FaChevronCircleDown className='icon icon--movieInfo' />
        </button>
      </div>

      <h4 className='movieInfo__title'>{title}</h4>
      <div className='movieInfo__rating'>
        Rating: {movie?.vote_average ? movie.vote_average.toFixed(1) : 'n/a'} / 10
      </div>
      {showPar && <p className='movieInfo__overview'>{truncate(movie.overview, 100)}</p>}
    </div>
  );
};

export default MovieInfo;
