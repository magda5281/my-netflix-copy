import React, {useEffect, useState} from 'react';
import "./Banner.scss";
import "./genericStyles/icon.scss";

import {FaInfoCircle, FaPlay} from "react-icons/fa";
import {IconContext} from "react-icons";

const Banner = ({movies}) => {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        //biore array movies i wybieram jeden obiekt z tablicy movies ustawiajac index na random number ;length - 1
        // jest po to aby nie przekroczyc dlugosci tablicy
        setMovie(
            movies[Math.floor(Math.random() * movies.length - 1)]
        )
    }, [movies]);

    // it hides the text if it is over number of caracters you specified ; you call that function from an element ,
    // so you use your text overview as first argument and add another argument as a number
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //? jest po to by
                    // powiedziec ze jezeli movie jest undefined to zeby app not crushed, it is optional chaining
                    // backgroundPosition: "center center",
                }}>

            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_title}</h1>
                <a href="">
                    <button className="banner__button">
                        <IconContext.Provider value={{className: "icon"}}><FaPlay/>
                        </IconContext.Provider>Play
                    </button>
                </a>
                <a href="">
                    <button className="banner__button banner__button--secondary">
                        <IconContext.Provider value={{className: "icon icon--info"}}><FaInfoCircle/>
                        </IconContext.Provider> Information
                    </button>
                </a>
                <p className="banner__description">{truncate(movie?.overview, 150)}</p>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    );
};
export default Banner;