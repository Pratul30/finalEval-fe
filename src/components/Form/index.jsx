import React  from 'react';
import makeAuthRequest from '../../utils/makeRequest/makeRequest';
import { LOGIN } from '../../constants/authEndPoints';
import { useNavigate } from 'react-router-dom';

function Form() {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    console.log('login clicked');
    makeAuthRequest(LOGIN, { 
      data: {
        email: event.target[0].value,
        password: event.target[1].value,
      },
    }).then((response) => {
      console.log('this is resposne', response.status);
      Promise.resolve(response).then(() => {
        if(response.status === 200) {
          navigate('/content-page');
        }
      });
    }).catch((error) => {
      console.log('login error: ', error);
    });
    event.preventDefault();
  };

  return (
    <div className='flex flex-col justify-center items-center bg-black basis-2/5 
    text-white font-montserrat'>
      <div className='text-xl font-bold mb-20'>
                Login to your CMS+ account
      </div>
      <form onSubmit={handleLogin}>
        <label className='text-sm font-extralight' htmlFor='email'>Email</label><br />
        <input className='rounded mb-3 text-black p-1' type='text' size='30'></input><br />
        <label className='text-sm font-extralight' htmlFor='email'>Password</label><br />
        <input className='rounded text-black p-1' type='password' size='30'></input><br />
        <button type='submit' className='w-full justify-center text-sm font-light bg-gradient-to-r from-purple-100 to-purple-200 p-2 mt-5 rounded'>Login</button>
        <a className='text-xs w-full flex justify-center mt-5'>Forgot Password?</a>
      </form>
    </div>
  );
}

export default Form;
