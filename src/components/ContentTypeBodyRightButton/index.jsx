import React from 'react';
import PropTypes from 'prop-types';
import { makeBackendRequest } from '../../utils/makeRequest/makeRequest';
import { CREATE_FIELD } from '../../constants/apiEndPoints';


function ContentTypeBodyRightButton({contentTypeId}) {

  const createField = () =>{
    makeBackendRequest(CREATE_FIELD(contentTypeId),{
    //   data: {
    //     name: inputValue,
    //   }
    }).then(
      (response) => {
        Promise.resolve(response).then(() => {
          console.log('response', response);
        //   setIsOpen(false);
        });
      }
    );
  };

  return (
    <div>
      <button onClick={createField}>
         Add another field
      </button>
    </div>
  );
}

ContentTypeBodyRightButton.propTypes = {
  contentTypeId: PropTypes.string
};

export default ContentTypeBodyRightButton;
