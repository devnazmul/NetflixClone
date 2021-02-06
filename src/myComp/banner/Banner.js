import instance from '../../axios';
import React, { useState, useEffect } from 'react'
import './Banner.css'
import requests from '../../Request'


export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginials);
            setMovie(
                request.data.results[ Math.floor(Math.random() * request.data.results.length - 1) ]
            );
            return request;
        }
        fetchData();
    }, []);
    
    console.log(movie);

    function shortDes(s, n) {
       
        if (s.length > n) {
            return `${s.substring(0, n)}...`;
        } else {
            return s;
        }
        
    }
    const movieDetails = movie.overview;
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundPosition: "center center",
        }}>
            <div className='banner_contant'>
                <h1 className='banner_title'>{movie.name}</h1>
                <div className='banner_btn_container'>
                    <button className='banner_btn'>Play</button>
                    <button className='banner_btn'>My List</button>
                </div>
                <p className='banner_discription'>
                    {shortDes('' + movieDetails + '', 150)}
                </p>
            </div>
            <div className='banner_fadeEffect'></div>
        </header>
    )
}
