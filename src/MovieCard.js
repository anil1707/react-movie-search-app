import React from "react";
import "./styles.css";
const MovieCard = ({ movie }) => {

  return (
    <>
      <div className="card" >
        <img src={movie?.Poster} alt="" />
        <div className="desc">
          <h3>Name : {movie?.Title}</h3>
          <h3>Year : {movie?.Year}</h3>
          <h4>Type : {movie?.Type}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
