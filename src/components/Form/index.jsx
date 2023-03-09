import React, { useState } from 'react';
import makeAuthRequest from '../../utils/makeRequest/makeRequest';
import { LOGIN } from '../../constants/authEndPoints';

function Form() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log('login clicked');
    await makeAuthRequest(LOGIN, { 
      data: {
        email,
        password,
      },
    });
    console.log('login done');
  };

  return (
    <div className='flex flex-col justify-center items-center bg-black basis-2/5 
    text-white font-montserrat'>
      <div className='text-xl font-bold mb-20'>
                Login to your CMS+ account
      </div>
      <form>
        <label className='text-sm font-extralight' htmlFor='email'>Email</label><br />
        <input onChange={handleEmailChange} className='rounded mb-3 text-black p-1' type='text' size='30'></input><br />
        <label className='text-sm font-extralight' htmlFor='email'>Password</label><br />
        <input onChange={handlePasswordChange} className='rounded text-black p-1' type='password' size='30'></input><br />
        <button onClick={handleLogin} className='w-full justify-center text-sm font-light bg-gradient-to-r from-purple-100 to-purple-200 p-2 mt-5 rounded'>Login</button>
        <a className='text-xs w-full flex justify-center mt-5'>Forgot Password?</a>
      </form>
    </div>
  );
}

export default Form;
