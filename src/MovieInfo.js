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
                            <h3><span className='span'>Name: </span>{movieData?.Title}</h3>
                            <p><span className='span'>IMDB Rating: </span>{movieData?.imdbRating}</p>
                            <p><span className='span'>Year: </span>{movieData?.Year}</p>
                            <p><span className='span'>Laungage: </span>{movieData?.Language}</p>
                            <p><span className='span'>Rated: </span>{movieData?.Rated}</p>
                            <p><span className='span'>Released: </span>{movieData?.Released}</p>
                            <p><span className='span'>Runtime: </span>{movieData?.Runtime}</p>
                            <p><span className='span'>Genre: </span>{movieData?.Genre}</p>
                            <p><span className='span'>Director: </span>{movieData?.Director}</p>
                            <p><span className='span'>Actors: </span>{movieData?.Actors}</p>
                            <p><span className='span'>Plot: </span>{movieData?.Plot}</p>
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