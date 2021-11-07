import {useState} from 'react';
import "./Row.scss"
import {API_KEY} from "./api/constants";
import MovieInfo from "./MovieInfo";

const Row = ({title, movies, rowTitle}) => {

    const [visibleId, setVisibleId] = useState("");

    return (
        <section className="rows">
            <div className="row">
                <h2 className="row__title">
                    {title}
                </h2>
                <div className="row__posters">
                    {movies.map((movie) => {
                        const id = movie.id;
                        const className = id == visibleId ? "visible" : "hidden";
                        return <div key={movie.id}
                                    className="row__poster"
                                    id={movie.id}
                                    onMouseEnter={(e) => setVisibleId(e.currentTarget.id)}
                                    onMouseLeave={() => setVisibleId("")}>

                            <img className={`row__posterImg ${rowTitle === "netflixOriginals" && "row__posterLarge"}`}
                                 src={`https://image.tmdb.org/t/p/original${rowTitle === "netflixOriginals" ? movie.poster_path : movie.backdrop_path}?=${API_KEY}`}
                                 alt={movie.title || movie.original_title || movie.name}/>
                            <MovieInfo movie={movie} className={className} id={id}/>
                        </div>
                    })}
                </div>

            </div>
        </section>
    );
};

export default Row;