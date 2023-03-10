import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../../assets/icons/trash-delete-recycle-bin-bucket-waste.png';
import editIcon from '../../assets/icons/user-edit-text-message-note.png';

function ContentTypeBodyRightHeader(props) {

  const {contentType} = props;

  return (
    <div className='flex items-center bg-white my-1 h-16 rounded-md justify-between'>
      <div className='flex px-4 mr-3 h-16 items-center bg-ab text-white rounded-l-md'>
        Ab
      </div>
      <div className='w-44'>
        {contentType}
      </div>
      <div className='flex-1 font-light'>
        Text
      </div>
      <div className='flex mr-5'>
        <div className='mx-2'>
          <img src={editIcon} />
        </div>
        <div className='mx-2'>
          <img src={deleteIcon} />
        </div>
      </div>
    </div>
  );
}

ContentTypeBodyRightHeader.propTypes = {
  contentType: PropTypes.string,
};

export default ContentTypeBodyRightHeader;
