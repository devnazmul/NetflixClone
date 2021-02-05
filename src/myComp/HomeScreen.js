import React from 'react'
import Banner from './banner/Banner'
import './HomeScreen.css'
import Nav from './nav/Nav'

export default function HomeScreen() {
    return (
        <div className='home-screen'>
            <Nav />
            <Banner />
            {/* rows */}
            
        </div>
    )
}
