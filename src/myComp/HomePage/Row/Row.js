import React, { useState, useEffect } from 'react'
import './Row.css'
import instance from '../../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export default function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
    let dis_non = "";
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '200',
        width: '100%',
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                    dis_non = "";
                })
                .catch((error) => {
                    dis_non = "dis_non";
                    console.log(error);
            })
        }
    }
    

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
                            <div className='poster_container'>
                                
                                <img 
                                    
                                    className={`movieImage ${isLargeRow && "image_big_poster"}`} 
                                    src={`${imageBaseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path }`} 
                                    key={movie.id} 
                                    alt={movie.name} 
                                />
                              
                                <div onClick = {() => handleClick(movie)} className='poser_details'>
                                    <h3 className='title'>{movie.name}</h3>
                                    <h3 className='rating'>Reating: {movie.vote_average}</h3>
                                    <h3 className='release'>Release On: {movie.first_air_date}</h3>
                                </div>
                                
                            </div>
                            
                        )
                        
                    ))
                    
                }
                
            </div>
            <YouTube className={dis_non} videoId={trailerUrl} opts={opts}/>
        </div>
    )
}
