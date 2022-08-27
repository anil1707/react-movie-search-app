import "./styles.css";
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";

import icon from './icon3.png'
export const API_KEY = "ae719e56";
export default function App() {
  const [list, setList] = useState([]);
  const [timeoutId, updateTimeout] = useState();
  const [movieInfo, onMovieSelect] = useState();

  async function searchMovie(name) {
    const data = await fetch(
      `https://www.omdbapi.com/?&apikey=${API_KEY}&s=${name}`
    );
    const actualData = await data.json();
    setList(actualData.Search);
  }

  function inputHandler(e) {
    clearTimeout(timeoutId);
    const timeout = setTimeout( ()=>{
      return searchMovie(e.target.value);
    }, 500);
    updateTimeout(timeout);
  }

  return (
    <div className="App">
      <div className="header">
        <h2 id="movieLand">Movie Bhandar</h2>
        <div className="searchPart">
          <img src={icon} alt="search icon" />
          <input
            id="inputPart"
            placeholder="Search here"
            type="text"
            onChange={inputHandler}
          />
          
        </div>
      </div>
      {movieInfo && <MovieInfo movieInfo={movieInfo} onMovieSelect={onMovieSelect} />}
      <div className="component">
        {list?.length > 0 ? (
          <>
            {
              list.map((item, index) => (
                <MovieCard movie={item}  key={index} onMovieSelect={onMovieSelect} />
              ))
            }
          </>
        ) : (
          <>
            <h2>No Movies Found....</h2>
          </>
        )}
      </div>
    </div>
  );
}
