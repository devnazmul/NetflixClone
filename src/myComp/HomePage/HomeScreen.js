import React from 'react'
import Banner from './banner/Banner'
import './HomeScreen.css'
import Nav from './nav/Nav'
import Row from './Row/Row'
import requests from '../../Request'


export default function HomeScreen() {
    return (
        <div className='home-screen'>
            <Nav />
            <Banner />
            <Row 
                title = 'NETFLIX ORIGINALS'
                fetchUrl = {requests.fetchNetflixOriginials}
            />
            <Row 
                title = 'Tranding Now'
                fetchUrl = {requests.fetchTrending}
            />
            <Row 
                title = 'Top Rated'
                fetchUrl = {requests.fetchTopRated}
            />
            <Row 
                title = 'Action Movies'
                fetchUrl = {requests.fetchActionMovies}
            />
            <Row 
                title = 'Comedy Movies'
                fetchUrl = {requests.fetchComedyMovies}
            />
            <Row 
                title = 'Horror Movies'
                fetchUrl = {requests.fetchHorrorMovies}
            />
            <Row 
                title = 'Romantic Movies'
                fetchUrl = {requests.fetchRomanticMovies}
            />
            <Row 
                title = 'Documentaries Movie'
                fetchUrl = {requests.fetchDocumentaries}
            />
            
        </div>
    )
}
