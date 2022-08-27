import React from "react";
import "./styles.css";
const MovieCard = (props) => {
  const { Poster, Title, Year,Type,  imdbID } = props?.movie;
 
  return (
    <>
      <div className="card" onClick={ () =>props.onMovieSelect(imdbID)}>
        <img src={Poster} alt="" />
        <div className="desc">
          <h3>Name : {Title}</h3>
          <h3>Year : {Year}</h3>
          <h4>Type : {Type}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
