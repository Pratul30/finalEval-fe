import React from 'react';
import PropTypes from 'prop-types';
import NewTypeButton from '../NewTypeButton';
import ContentTypeButton from '../ContentTypeButton';
import search from '../../assets/icons/icon-search-dark.png';

function ContentTypeSideNavbarBody({contentTypes, setcontentTypesObj}) {

  return (
    <div className='flex flex-col m-6'>
      {
        <div className='flex justify-between mb-2 font-light'>
          {
            contentTypes.length
          } Types
          <img src={search} />
        </div>
      } 
      <NewTypeButton />
      {
        // eslint-disable-next-line react/jsx-key
        contentTypes.map((contentType) => <ContentTypeButton contentType={contentType} setcontentTypesObj={setcontentTypesObj} />
        )
      } 
      
    </div>
  );
}

ContentTypeSideNavbarBody.propTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.object),
  setcontentTypesObj: PropTypes.func
};


export default ContentTypeSideNavbarBody;
