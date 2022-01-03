import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Header from '../components/Header'
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
    <main className='signupPage'>
      <Header />
      <div className=''>
        <div className=''>

          <div className='centerdiv'>
            <h4 className=''>Sign Up</h4>
            <form onSubmit={handleFormSubmit} className='center'>
              <input
                className='form-input'
                placeholder='Username'

                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Email'

                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='form-input' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
      <div className="loginSignupBtn">
        <h3>Already a Member?</h3>
        <Link className="landingbtns login" to="/login">Login</Link>
      </div>
    </main>
  );
};

export default Signup;
