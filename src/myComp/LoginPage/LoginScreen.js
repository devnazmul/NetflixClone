import React, { useState } from 'react'
import './LoginScreen.css'
import Signin from './Signin/Signin';

export default function LoginScreen() {
    const [signin, setSignin] = useState(false);

    return (
        <div className='login'>
            <div className='nav_bar'>
                <img
                    className='nav_logo'
                    src='https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=624%2C390'
                    alt='netflix-logo'
                />
                <button
                    className = 'signin_btn'
                    onClick = {() => setSignin(true)}
                >
                    Sign In
                </button>
            </div>
            <div className='login_bg_gradient' />

            <div className='login_hero_content_container' >
                <div className='login_hero_content' >
                    {
                        signin ? (
                            <Signin />
                        ) : (
                            <>
                                <h1>Unlimited movies, TV shows, and more.</h1>
                                <p>Watch anywhere. Cancel anytime.</p>
                                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                                <input className='hero_login_input' type='email' placeholder='Email address' />
                                <button
                                    className='hero_login_btn'
                                    type='submit'
                                    onClick = {() => setSignin(true)}
                                >
                                    GET START
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
