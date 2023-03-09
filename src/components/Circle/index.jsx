import React from 'react';

function Circle() {
  return (
    <div>
      <div className='absolute right-2 top-2 h-40 w-40 bg-white rounded-full'>
      </div>
      <div className='absolute right-36 top-32 h-24 w-24 bg-white rounded-full'>
      </div>
      <div className='absolute bottom-12 h-24 w-24 bg-white rounded-full'>
      </div>
      <div className='absolute h-12 bottom-0 left-12 w-24 bg-white rounded-tr-full rounded-tl-full'>
      </div>
    </div>
  );
}

export default Circle;
