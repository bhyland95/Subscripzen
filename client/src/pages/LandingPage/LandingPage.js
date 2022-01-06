import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo2 from '../../assets/logo2.png'
import './LandingPage.css'


const Landing = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <main className="landingPage">
            <div className='square-landing'></div>
            <div className='square-landing'></div>
            <div className='square-landing'></div>
            <div className='square-landing'></div>
            <div className='square-landing'></div>
            <div className='square-landing'></div>
            <div className='square-landing'></div>

            <div className="centerlanding">
                <img className="landingLogo" src={logo2}></img>
            </div>
            <div>

                <div className="buttonContainer">
                    <Link className=" login" to="/login"><span className='login-text'>Login</span></Link>
                    <Link className=" signup" to="/signup"><span className='signup-text'>Sign-Up</span></Link>
                </div>

            </div>
        </main >
    )
}

export default Landing;