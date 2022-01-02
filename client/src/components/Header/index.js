import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../assets/logo2.png'




const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

 

    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center app-header">
            <div className="container flex-row justify-space-between-lg justify-center align-center nav">
                <Link to="/" >
                    {/* <h1>Subscripzen</h1> */}
                    <img className="logo" src={Logo}></img>

                </Link>

                <nav className="text-center">
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
                            <div className="loginSignupBtn ">
                                <Link className="btns" to="/login">Login</Link>
                                <Link className="btns" to="/signup">Signup</Link>
                            </div>
                        </>

                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header;