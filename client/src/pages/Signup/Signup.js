import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Signup.css'
import { Link } from 'react-router-dom';


const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

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
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='signupBox'>

      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      


        <div className='card-body'>
          <form className='signup-form' onSubmit={handleFormSubmit}>

            <h2> Sign-Up </h2>

            <input
              className='form-input'
              placeholder='Username'
              name='username'
              type='username'
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
            <input
              className='form-input'
              placeholder='Email'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className='form-input'
              placeholder='Password'
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
            <button className='form-input' type='submit'>
              Submit
            </button>
          </form>
          {error && <div>Sign up failed</div>}
          <Link to='/login'>
                <p className='loginInstead' >
                    Login Instead
                </p>
            </Link>
        </div>
      

    </main>
  );
};

export default Signup;
