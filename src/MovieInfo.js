import React from 'react';
import "./MovieInfo.scss";
import "./icon.scss";
import { FaPlayCircle, FaPlusCircle, FaThumbsUp, FaThumbsDown, FaChevronCircleDown } from "react-icons/fa";
import {IconContext} from "react-icons";

const MovieInfo = ({movie}) => {
    console.log(movie?.title)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
            <div className="movieInfo" >
                <div className="movieInfo__IconsWrap">
                    <div className="movieInfo__left">
                        <IconContext.Provider value={{className: "icon icon--movieInfo"}}><FaPlayCircle/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "icon icon--movieInfo"}}><FaPlusCircle/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "icon icon--movieInfo"}}><FaThumbsUp/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "icon icon--movieInfo"}}><FaThumbsDown/>
                        </IconContext.Provider>
                    </div>
                    <IconContext.Provider value={{className: "icon icon--movieInfo"}}><FaChevronCircleDown/>
                    </IconContext.Provider>
                </div>

                <h4 className="movieInfo__title">
                    {movie?.title || movie?.name || movie?.original_title}
                </h4>
                <div className="movieInfo__rating">Average rating: {movie?.vote_average}</div>
                <p className="movieInfo__overview">
                    {truncate(movie.overview, 100)}
                </p>
            </div>

    );
};

export default MovieInfo;