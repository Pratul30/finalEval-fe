import React from 'react';
import PropTypes from 'prop-types';
import search from '../../assets/icons/icon-search-dark.png';

function CollectionTypesButton({setIsContentTypesLoaded}) {
  return (
    <div className='flex justify-between items-center'>
      <button onClick={()=>setIsContentTypesLoaded(false)} className='text-white m-3 mt-5 font-montserrat text-md font-bold'>
      COLLECTION TYPES
      </button>
      <img src={search} className='object-contain m-3' />
    </div>
  );
}

CollectionTypesButton.propTypes = {
  setIsContentTypesLoaded: PropTypes.func,
};

export default CollectionTypesButton;
