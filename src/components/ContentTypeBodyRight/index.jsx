import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContentTypeBodyRightHeader from '../ContentTypeBodyRightHeader';
import ContentTypeBodyRightButton from '../ContentTypeBodyRightButton';
import { makeBackendRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_FIELDS, UPDATE_FIELD } from '../../constants/apiEndPoints';

function ContentTypeBodyRight({contentTypesObj}) {

  const [fieldArr, setFieldArr] = useState([]);
  
  useEffect(() => {
    console.log('contentTypesObj', contentTypesObj);
    setFieldArr(Object.keys(contentTypesObj).length===0 ? [] : contentTypesObj.attributes);
  }, [contentTypesObj]);

  console.log('content', contentTypesObj);

  useEffect(() => {
    if(contentTypesObj!==undefined && Object.keys(contentTypesObj).length!==0){
      makeBackendRequest(UPDATE_FIELD(contentTypesObj.cTypeId),{
        data: {
          attributes: fieldArr
        }
      }).then(
        (response) => {
          console.log('update field response', response);
          Promise.resolve(response).then(() => {
            makeBackendRequest(GET_ALL_FIELDS(contentTypesObj.cTypeId)).then(
              (response) => {
                console.log('fields response', response);
                Promise.resolve(response).then(() => {
                  setFieldArr(response.data.data.attributes);
                });
              }
            ); 
          });
        }
      );
    }
  }, [fieldArr]);

  console.log('fieldArr', fieldArr);

  return (
    <div className='flex flex-col m-3 w-full'>
      <div className='font-montserrat font-light'>{
        fieldArr.length
      } fields
      </div>
      <ContentTypeBodyRightButton fieldArr={fieldArr} setFieldArr={setFieldArr} />
      {
        fieldArr.length > 0 &&
                // eslint-disable-next-line react/jsx-key
                fieldArr.map((contentType) => <ContentTypeBodyRightHeader contentType={contentType} />)
      }
    </div>
  );
}

ContentTypeBodyRight.defaultProps = {
  contentTypesObj: {
    attributes: [],
  }
};

ContentTypeBodyRight.propTypes = {
  contentTypesObj: PropTypes.object
};

export default ContentTypeBodyRight;
