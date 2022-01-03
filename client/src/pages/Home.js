import React from 'react';
import SubList from '../components/SubList/SubList';
import Total from '../components/Total';

// import Header from '../components/Header'

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Home = () => {

    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    const { data: userData } = useQuery(QUERY_ME);

    const loggedIn = Auth.loggedIn();

    return (
        <div>

            {loggedIn && userData ? (
                <main>
                    <div className="spendingBox">
                        <div>
                            <h2 >Monthly Spending: 
                                <Total
                                    subscriptions={userData.me.subscriptions}
                            />
                            </h2>
                            <br></br>
                            <h2>Cancel and Save - link to save money page </h2>
                        </div>
                    </div>

                </main>
            ) : <div>
                <h3>Login to get started!</h3>
            </div>}



            {loggedIn && userData ? (
                <div className="col-12 col-lg-3 mb-3">
                    <SubList
                        subscriptions={userData.me.subscriptions}

                    />
                </div>
            ) : null}
        </div>
    );
};

export default Home;