import React, { useState } from "react";
import db from "./firebase";

import { API_KEY } from "./api/constants";
import MovieInfo from "./MovieInfo";
import "./Row.scss";
import "./genericStyles/icon.scss";
import firebase from "firebase";

const Row = ({ title, movies, rowTitle, user }) => {
  const [visibleId, setVisibleId] = useState("");
  const showPar = true;
  const handleAddToList = (clickedId, movie) => {
    if (clickedId === visibleId) {
      db.collection("users")
        .doc(user.uid)
        .update({
          favourites: firebase.firestore.FieldValue.arrayUnion(movie),
        })
        .then(() => {
          console.log("added");
        });
    }
  };

  return (
    <section className="rows" style={{ position: "relative" }}>
      <div className="row">
        <h2 className="row__title">{title}</h2>
        <div className="row__posters ">
          {movies.map((movie) => {
            const id = movie.id;
            const className = id === visibleId ? "visible" : "hidden";
            return (
              <div
                key={movie.id}
                className="row__poster"
                id={movie.id}
                onMouseEnter={(e) => setVisibleId(e.currentTarget.id)}
                onMouseLeave={() => setVisibleId("")}
              >
                <img
                  className={`row__posterImg ${
                    rowTitle === "netflixOriginals" && "row__posterLarge"
                  }
                    ${id === visibleId && "imageHovered"}`}
                  src={`https://image.tmdb.org/t/p/original${
                    rowTitle === "netflixOriginals"
                      ? movie.poster_path
                      : movie.backdrop_path
                  }?=${API_KEY}}`}
                  alt={movie.title || movie.original_title || movie.name}
                />
                <MovieInfo
                  movie={movie}
                  className={className}
                  id={id}
                  handleAddToList={handleAddToList}
                  showPar={showPar}
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
