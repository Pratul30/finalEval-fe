import React from 'react';
import LoginSideImage from '../../components/LoginSideImage';
import Form from '../../components/Form';
import './login.css';

function Login() {
  return (
    <div className='loginPage flex font-montserrat'>
      <LoginSideImage />
      <Form />
    </div>
  );
}

export default Login;
