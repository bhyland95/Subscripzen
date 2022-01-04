import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './header.css'



const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };



    return (
        <header className="">

            <ul>

                {Auth.loggedIn() ? (
                    <>
                        <li>
                            <Link  to="/addsub">
                                <div className='circle'>
                                   
                                        <FontAwesomeIcon className="NavItem" icon={faPlus} />
                                    
                                </div>
                            </Link>

                        </li>
                    </>
                ) : (
                    <>
                        <li> <Link className="NavItem" to="/login">Login</Link></li>
                        <li><Link className="NavItem" to="/signup">Signup</Link></li>
                    </>

                )}
            </ul>

        </header>
    )
}

export default Header;