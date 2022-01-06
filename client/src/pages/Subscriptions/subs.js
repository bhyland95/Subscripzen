import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import "./subs.css"

const Subs = () => {

    let seeds = [
        {
            id: 1,
            icon: <Icon icon="cib:netflix" />,
            name: "Netflix",
            nextCharge: "",
            amount: 13.99
        },
        {
            id: 2,
            icon: <Icon icon="cib:hulu" />,
            name: "Hulu",
            nextCharge: "",
            amount: 6.99
        },
        {
            id: 3,
            icon: <Icon icon="ion:logo-xbox" />,
            name: "Xbox",
            nextCharge: "",
            amount: 9.99
        },
        {
            id: 4,
            icon: <Icon icon="ant-design:apple-filled" />,
            name: "Apple Music",
            nextCharge: "",
            amount: 9.99
        },
        {
            id: 5,
            icon: <Icon icon="akar-icons:spotify-fill" />,
            name: "Spotify",
            nextCharge: "",
            amount: 9.99
        },
        {
            id: 6,
            icon: <Icon icon="simple-icons:prime" />,
            name: "Amazon Prime",
            nextCharge: "",
            amount: 12.99
        },
        {
            id: 7,
            icon: <Icon icon="bx:bxl-audible" />,
            name: "Audible",
            nextCharge: "",
            amount: 14.95
        },
        {
            id: 8,
            icon: <Icon icon="gg:gym" />,
            name: "Gym",
            nextCharge: "",
            amount: 14.99
        },
        {
            id: 9,
            icon: <Icon icon="bi:playstation" />,
            name: "PlayStation",
            nextCharge: "",
            amount: 9.99
        },
    ]



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
