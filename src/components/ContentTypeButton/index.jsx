import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeBackendRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_FIELDS, GET_ENTRIES_BY_CONTENT_TYPE } from '../../constants/apiEndPoints';

function ContentTypeButton({contentType, setcontentTypesObj}) {

  const [entries, setEntries] = useState(0);

  useEffect(()=>{
    makeBackendRequest(GET_ENTRIES_BY_CONTENT_TYPE(contentType.cTypeId)).then(
      (response) => {
        setEntries(response.length);
        Promise.resolve(response).then(() => {
          setEntries(response.length);
        });
      }
    );
  });

  const handleContentTypeArr = () => {
    makeBackendRequest(GET_ALL_FIELDS(contentType.cTypeId)).then(
      (response) => {
        Promise.resolve(response).then(() => {
          setcontentTypesObj(response[0]);
        });
      }  
    );
  };

  return (
    <button onClick={handleContentTypeArr} className='flex bg-white m-1 p-2 rounded-md justify-between text-sm'>
      {
        <div>
          {
            contentType.cTypeName
          }
        </div>
      }{
        <div>
          {
            entries
          }
        </div>
      }
    </button>
  );
}

ContentTypeButton.propTypes = {
  contentType: PropTypes.object,
  setcontentTypesObj: PropTypes.func
};

export default ContentTypeButton;
