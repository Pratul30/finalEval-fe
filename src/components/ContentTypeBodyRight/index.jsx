import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentTypeBodyRightHeader from '../ContentTypeBodyRightHeader';
import ContentTypeBodyRightButton from '../ContentTypeBodyRightButton';

function ContentTypeBodyRight(props) {
  
  const {contentTypesObj} = props;

  console.log('contentTypesObj', contentTypesObj);

  const contentTypesArr = Object.keys(contentTypesObj).length === 0 ? [] : contentTypesObj.attributes;
  const contentTypeId = contentTypesObj.cTypeId;

  const [fieldArr, setFieldArr] = useState(contentTypesArr);
  
  return (
    <div className='m-3'>
      <div>{
        fieldArr.length 
      } fields
      </div>
      {
        fieldArr.length>0 && 
        // eslint-disable-next-line react/jsx-key
        fieldArr.map((contentType) => <ContentTypeBodyRightHeader contentType={contentType} />)
      }
      <ContentTypeBodyRightButton contentTypeId={contentTypeId} setFieldArr={setFieldArr} />
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
