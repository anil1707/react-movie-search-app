import React, { useEffect, useState }  from 'react';
import { API_KEY } from './App';
function MovieInfo(props)
{
    const [ movieData, setMovieData] = useState();

  async function fetchDtat(id){
        const response = await fetch(`https://www.omdbapi.com/?&apikey=${API_KEY}&i=${id}`);
        const detail = await response.json();
        console.log(detail);
        setMovieData(detail);
    }
    useEffect( () =>{
        fetchDtat(props.movieInfo)
    },[props.movieInfo])

    return (
        <>
            {
                movieData ?
            <>
                <div className="mainContainer">
                    <div className='infoContainer'>
                        <img src={movieData?.Poster} alt="Poster" />
                        <div className='subData'>
                            <h3>Name :{movieData?.Title}</h3>
                            <p>IMDB Rating: {movieData?.imdbRating}</p>
                            <p>Year: {movieData?.Year}</p>
                            <p>Laungage: {movieData?.Language}</p>
                            <p>Rated: {movieData?.Rated}</p>
                            <p>Released: {movieData?.Released}</p>
                            <p>Runtime: {movieData?.Runtime}</p>
                            <p>Genre: {movieData?.Genre}</p>
                            <p>Director: {movieData?.Director}</p>
                            <p>Actors: {movieData?.Actors}</p>
                            <p>Plot: {movieData?.Plot}</p>
                        </div>
                        
                    </div>
                    <button type='submit' id='cross' onClick={ () =>props.onMovieSelect()}>X</button>
                </div>
            </> : "Loading..."
            }
        </>
    )
}
export default MovieInfo;