import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Login.css'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='loginBox'>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>


      
      <div className='card-body'>
     

        <form className='login-form' onSubmit={handleFormSubmit}>

          <h2> Welcome </h2>

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
        {error && <div>Login failed</div>}
      </div>
    </main>
  );
};

export default Login;
