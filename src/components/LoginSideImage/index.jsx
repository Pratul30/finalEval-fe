import React from 'react';
import FullCircle from '../Circle';
const sideImage = require('../../assets/images/undraw-upload-re-pasx.png');
import './loginImage.css';


function LoginSideImage() {
  return (
    <div className='basis-3/5 relative'>
      <FullCircle />
      <div className='absolute top-16 left-16 text-3xl font-medium'>Design APIs fast, <br /> Manage content easily.</div>
      <img src={sideImage} className="h-full object-contain"/>
    </div>
  );
}

export default LoginSideImage;
