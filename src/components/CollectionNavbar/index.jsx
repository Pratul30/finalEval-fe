import React from 'react';
import PropTypes from 'prop-types';

function CollectionNavbar({contentType,selectedId,setSelectedId}) {

  let color = 'sidebar';
  let bold = '';

  const handleSelectedId = () => {
    setSelectedId(contentType.cTypeId);
  };

  if(selectedId===contentType.cTypeId){
    color='black';
    bold = 'bold';
  }

  return (
    // eslint-disable-next-line quotes
    <button onClick={handleSelectedId} className={`flex text-white font-montserrat text-sm ml-2 bg-${color} font-${bold}`}>
      . {
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
