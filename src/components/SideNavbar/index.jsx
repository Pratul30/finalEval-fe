import React, { useState } from 'react';
import LogoBar from '../LogoBar';
import PropTypes from 'prop-types';
import CollectionNavbar from '../CollectionNavbar';
import CollectionTypesButton from '../CollectionTypesButton';
import ContentTypeBuilderButton from '../ContentTypeBuilderButton';
// import CollectionNavbar from '../CollectionNavbar';

function SideNavbar(props) {

  const { contentTypes } = props;
  const {setIsContentTypesLoaded} = props;

  console.log(contentTypes);

  // eslint-disable-next-line no-unused-vars
  const [selectedId, setSelectedId] = useState(contentTypes[0].cTypeId); 

  return (
    <div className='flex flex-col basis-1/4 bg-sidebar'>
      <LogoBar />
      <CollectionTypesButton setIsContentTypesLoaded={setIsContentTypesLoaded} />
      {
        contentTypes.map((contentType) => {
          // eslint-disable-next-line react/jsx-key
          return ( <CollectionNavbar contentType={contentType} selectedId={selectedId} setSelectedId={setSelectedId} />);
        }
        )
      }
      <ContentTypeBuilderButton setIsContentTypesLoaded={setIsContentTypesLoaded} />
    </div>
  );
}

SideNavbar.propTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.object),
  setIsContentTypesLoaded: PropTypes.func,
};

export default SideNavbar;
