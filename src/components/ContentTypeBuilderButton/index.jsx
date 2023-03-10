import React from 'react';
import PropTypes from 'prop-types';

function ContentTypeBuilderButton({setIsContentTypesLoaded}) {
  return (
    <button onClick={()=>setIsContentTypesLoaded(true)} className='flex text-white text-md font-bold mt-3 pl-2 p-1'>
      <div>
      CONTENT TYPE BUILDER
      </div>
  
    </button>
  );
}

ContentTypeBuilderButton.propTypes = {
  setIsContentTypesLoaded: PropTypes.func,
};

export default ContentTypeBuilderButton;
