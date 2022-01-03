import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Logo from '../assets/logo2.png'


const Landing = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <main className="landingPage">
            <div className="centerlanding">
                <Link to="/" className>
                    {/* <h1>Subscripzen</h1> */}
                    <img className="landingLogo" src={Logo}></img>

                </Link>
            </div>
            <div>
            <nav className="">
                {Auth.loggedIn() ? (
                    <>
                        <a href="/" onClick={logout}>
                            Logout
                            </a>
                        <Link to="/profile">My Subscriptions</Link>

                        <Link to="/addsub">Add Subscription</Link>
                    </>
                ) : (
                    <>
                        <div className="loginSignupBtn">
                            <Link className="landingbtns login" to="/login">Login</Link>
                            <Link className="landingbtns signup" to="/signup">Signup</Link>
                        </div>
                    </>

                )}
            </nav>
            </div>
        </main >
    )
}

export default Landing;