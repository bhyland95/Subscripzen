import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import "./subs.css"
import { seeds } from '../../utils/seeds';
const Subs = () => {

   



    return (


        <section>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            
            <div className='container'>
                {[...seeds] &&
                    [...seeds].map(seed => (

                        <div key={seed.id} className='subContainer' >

                            <ul>


                                <li className='subName'>
                                    <span className='subIcon'>{seed.icon}</span> <span>{seed.name}</span>
                                </li>

                                <li>
                                    <Link to={`/addsub?name=${seed.name}&&amount=${seed.amount}`}>
                                        <button className='sub-btn' >
                                            Add
                                        </button>
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    ))
                }

            </div>

            <Link to='/addSub'>
                <button className='custom-btn' >
                    Add Custom Subscription
                </button>
            </Link>
        </section>
    )
};

export default Subs;
