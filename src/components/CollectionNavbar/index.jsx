import React from 'react';
import PropTypes from 'prop-types';

function CollectionNavbar({contentTypeName}) {
  return (
    <div className='text-white'>
      {
        contentTypeName
      }
    </div>
  );
}

CollectionNavbar.propTypes = {
  contentTypeName: PropTypes.string
};

export default CollectionNavbar;
