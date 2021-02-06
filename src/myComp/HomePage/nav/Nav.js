import React, { useState, useEffect } from 'react'
import './Nav.css'


export default function Nav() {
    const [show, handleShow] = useState(false);

    const navTransition = () =>{
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", navTransition);
        return () => window.removeEventListener("scroll", navTransition);
    }, []);

    return (
        <div className={`nav_container ${show && 'nav__black'}`}>
            <div className='nav_bar'>
                <img className='nav_logo' src='https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=624%2C390' alt='netflix-logo' />
                <img className='nav_avater' src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png' alt='avater' />
            </div>
        </div>
    )
}
