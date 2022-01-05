import React from 'react';
import SubList from '../../components/SubList/SubList'
import Total from '../../components/Total';
import Header from '../../components/Header/header'
import logo2 from '../../assets/logo2.png'


import Auth from '../../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import './Home.css'

const Home = () => {

    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    const { data: userData } = useQuery(QUERY_ME);

    const loggedIn = Auth.loggedIn();

    return (
        <body>
            <section>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>



                <div className='headerContainer'>


                    <Header />
                    {loggedIn && userData ? (
                        <div className='totalContainer'>
                            <h2 >Monthly Total:
                                <Total
                                    subscriptions={userData.me.subscriptions}
                                />
                            </h2>

                        </div>
                    ) : <div>
                        <h3>Login to get started!</h3>
                    </div>}

                    <img className='logo' src={logo2} />

                    <div className='mysubs'>
                        <h2>My Subscriptions</h2>
                    </div>

                    {loggedIn && userData ? (

                        <div className="SubContainer">
                            <SubList
                                subscriptions={userData.me.subscriptions}
                            />
                        </div>
                    ) : null}

                    
                </div>








            </section>
        </body>

    );
};

export default Home;