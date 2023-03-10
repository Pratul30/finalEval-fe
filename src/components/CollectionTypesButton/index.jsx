import React from 'react';
import PropTypes from 'prop-types';

function CollectionTypesButton({setIsContentTypesLoaded}) {
  return (
    <button onClick={()=>setIsContentTypesLoaded(false)} className='text-white m-2 mt-5 font-montserrat text-xs'>
      COLLECTION TYPES
    </button>
  );
}

CollectionTypesButton.propTypes = {
  setIsContentTypesLoaded: PropTypes.func,
};

export default CollectionTypesButton;
