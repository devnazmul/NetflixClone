import React, { useRef } from 'react'
import './Signin.css'
import { auth } from '../../../firebase'


export default function Signin() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch ((error) => {
                alert(error.message)
        });
    }


    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (

        <div className='signin'>
            <div className='signin_content'>
                <h2 className='signin_title_h1' >Sign In</h2>
                <div className='signin_input'>
                    <input ref={emailRef} type="email" placeholder='Email' />
                    <input ref={passwordRef} type="password" placeholder='Password' />
                    <button className='signin_btn input_signin_btn' onClick={signin}>Sign In</button>
                </div>
                <p className='signin_input_p'>New to Netflix?  <button className='signup_btn' onClick={register}>Sign up now.</button></p>
                
            </div>
        </div>
    )
}
