import React from 'react';
import PropTypes from 'prop-types';
import { RxDotFilled } from 'react-icons/rx';

function CollectionNavbar({contentType,selectedId,setSelectedId}) {

  let color = 'sidebar';
  let bold = '';

  const handleSelectedId = () => {
    console.log('individual id',contentType.cTypeId);
    setSelectedId(contentType.cTypeId);
  };

  if(selectedId===contentType.cTypeId){
    color='black';
    bold = 'bold';
  }

  return (
    // eslint-disable-next-line quotes
    <button onClick={handleSelectedId} className={`flex text-white items-center font-montserrat text-md ml-3 m-1 bg-${color} font-${bold}`}>
      <RxDotFilled /> 
      {
        contentType.cTypeName
      }
    </button>
  );
}

CollectionNavbar.propTypes = {
  contentType: PropTypes.object,
  selectedId: PropTypes.string,
  setSelectedId: PropTypes.func,
};

export default CollectionNavbar;
