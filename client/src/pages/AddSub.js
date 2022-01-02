import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SUB } from '../utils/mutations';


const AddSub = () => {
    const [formState, setFormState] = useState({ name: 'Netflix', amount: 9.99, nextCharge: '1/1/2022' });

    const [addSub, { error }] = useMutation(ADD_SUB);

    // update state based on form input changes
    const handleChange = (event) => {
        let { name, value } = event.target;

        if(name === "amount" ){
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

            setFormState('','','')
            window.location.assign('/')
        } catch (e) {
            console.error(e);
        }

    };

    return (
        <main className='flex-row justify-center mb-4'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Sign Up</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='form-input'
                                placeholder='Subscription Name'
                                name='name'
                                type='name'
                                id='name'
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='Subscription Amount'
                                name='amount'
                                type='amount'
                                id='amount'
                                value={formState.amount}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='Next Charge'
                                name='nextCharge'
                                type='nextCharge'
                                id='nextCharge'
                                value={formState.nextCharge}
                                onChange={handleChange}
                            />
                            <button className='btn d-block w-100' type='submit'>
                                Add Subscription
                            </button>
                        </form>
                        {error && <div>Failed to add subscription</div>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddSub;