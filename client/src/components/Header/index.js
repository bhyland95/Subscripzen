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
        <header className="app-header">
            <div className="nav">
                <Link to="/">
                    <img className="logo" src={Logo}></img>
                </Link>
                <h4>Logout</h4>
                <h4>Add</h4>
                <h4>Username</h4>
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
                            {/* <div className="loginSignupBtn">
                                <Link className="landingbtns login" to="/login">Login</Link>
                                <Link className="landingbtns signup" to="/signup">Signup</Link>
                            </div> */}
                        </>

                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header;