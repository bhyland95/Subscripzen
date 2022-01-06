import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SUB } from '../../utils/mutations';
import dateFormat from '../../utils/dateFormat'
import './AddSub.css'

import { useLocation } from 'react-router-dom';


const AddSub = () => {
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    

    let query = useQuery()

    let test2 = query?.get("amount")
    console.log( parseInt(test2))

    const [formState, setFormState] = useState({ name: query?.get("name"), amount: test2, nextCharge: '1/1/2022' });

    const [addSub, { error }] = useMutation(ADD_SUB);

    let today = new Date()
    let year = today.getFullYear()
    let month = (today.getMonth()) + 1
    if (month < 10) {
        month = '0' + month
    }
    let day = today.getDate()
    if (day < 10) {
        day = '0' + day
    }
    let dt = year + '-' + month + '-' + day





    // update state based on form input changes
    const handleChange = (event) => {
        let { name, value } = event.target;

        if (name === "amount") {
            value = parseFloat(value)
        }
        setFormState({
            ...formState,
            [name]: value,

        });

    };

    // submit form (notice the async!)
    const handleFormSubmit = async event => {
        event.preventDefault();



        // use try/catch instead of promises to handle errors
        try {
            await addSub({
                variables: { ...formState }
            });

            setFormState('', '', '')
            window.location.assign('/home')
        } catch (e) {
            console.error(e);
        }

    };

    useEffect(() => console.log(formState.nextCharge), [formState])

    return (
        <section className=''>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>
            <div className='square-login'></div>

            <div className='addSubContainer'>
                <form className='addSub-form' onSubmit={handleFormSubmit}>
                    <input
                        className='form-input2'
                        placeholder='Subscription Name'
                        name='name'
                        type='name'
                        id='name'
                        value={formState.name}
                        onChange={handleChange}
                    />
                    <input
                        className='form-input2'
                        placeholder='Subscription Amount'
                        name='amount'
                        type='amount'
                        id='amount'
                        value={formState.amount}
                        onChange={handleChange}
                    />
                    <input
                        className='form-input2'
                        placeholder='Next Charge'
                        name='nextCharge'
                        type='date'
                        min={dt}
                        id='nextCharge'
                        value={formState.nextCharge}
                        onChange={handleChange}
                    />
                    <button className='form-input2' type='submit'>
                        Add Subscription
                    </button>
                </form>
                {error && <div>Failed to add subscription</div>}
            </div>

        </section>
    );
};

export default AddSub;