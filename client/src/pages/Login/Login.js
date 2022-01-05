import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';



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

    <main className='loginPage'>
      <Header />
      <div className=''>
        <div className=''>

          <div className='centerdiv'>
            <h4 className=''>Login</h4>
            <form onSubmit={handleFormSubmit} className="center">
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
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>


      <div className="loginSignupBtn">
        <h3>Need to Signup?</h3>
        <Link className="landingbtns signup" to="/signup">Signup</Link>
      </div>

    </main>
  );
};

export default Login;
