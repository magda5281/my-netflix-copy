import {useState} from 'react';
import "./Row.scss"
import {API_KEY} from "./api/constants";
import MovieInfo from "./MovieInfo";


const Row = ({title, movies, rowTitle}) => {
    const [isShown, setIsShown] = useState(false);
    const [hoveredMovie, setHoveredMovie] =useState({})
    console.log(isShown)
    console.log(hoveredMovie);
    const handleMouseEnter = (e, movie)=>{
    setHoveredMovie(movie)
    setIsShown(true);
    }

    return (
        <section className="rows">
            <div className="row">
                <h2 className="row__title">
                    {title}
                </h2>
                <div className="row__posters">
                    {movies.map((movie)=>{
                        return <div key = {movie.id}
                                    className="row__poster"
                                    onMouseEnter={(e) => handleMouseEnter(e, movie)}
                                    onMouseLeave={() => setIsShown(false)}
                                    >
                                    <img className={`row__posterImg ${rowTitle ==="netflixOriginals" && "row__posterLarge"}`}
                                         src={`https://image.tmdb.org/t/p/original${rowTitle ==="netflixOriginals" ? movie                                                      .poster_path : movie.backdrop_path}?=${API_KEY}`}
                                         alt={movie.title}
                                         id = {movie.id}
                                    />
                                </div>
                    })}
                    {hoveredMovie && isShown===true ? <MovieInfo movie={hoveredMovie}/> : null}

                </div>
            </div>
        </section>
    );
};

export default Row;