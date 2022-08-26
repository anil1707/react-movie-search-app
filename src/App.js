import "./styles.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import icon from './icon3.png'
export const API_KEY = "ae719e56";
export default function App() {
  const [name, setName] = useState("spider");
  const [list, setList] = useState([]);

  async function searchMovie(name) {
    const data = await fetch(
      `https://www.omdbapi.com/?&apikey=${API_KEY}&s=${name}`
    );
    const actualData = await data.json();
    setList(actualData.Search);
    // console.log(actualData);
  }

  useEffect(() => {
    searchMovie(name);
  }, [name]);
  function inputHandler(e) {
    setName(e.target.value);
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
            value={name}
            onChange={inputHandler}
          />
          
        </div>
      </div>
      <div className="component">
        {list?.length > 0 ? (
          <>
            {
              list.map((item, index) => (
                <MovieCard movie={item} key={index}  />

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
