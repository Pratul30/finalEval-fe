import React from 'react';
import PropTypes from 'prop-types';

function ContentTypeBodyRightHeader(props) {

  const {contentType} = props;

  return (
    <div>
      <div>
        {contentType}
      </div>
    
    </div>
  );
}

ContentTypeBodyRightHeader.propTypes = {
  contentType: PropTypes.string,
};

export default ContentTypeBodyRightHeader;
