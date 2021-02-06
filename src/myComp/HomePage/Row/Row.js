import React, { useState, useEffect } from 'react'
import './Row.css'
import instance from '../../../axios';

export default function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2 className='row_title' >{title}</h2>
            <div className='movie_container'>
                {
                    movies.map((movie) => (
                        (
                            (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)
                        ) 
                        &&
                        (
                            <img 
                                className={`movieImage ${isLargeRow && "image_big_poster"}`} 
                                src={`${imageBaseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path }`} 
                                key={movie.id} 
                                alt={movie.name} 
                            />
                        )
                        
                    ))
                }
            </div>
        </div>
    )
}
