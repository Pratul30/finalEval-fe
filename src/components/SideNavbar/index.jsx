import React from 'react';
import LogoBar from '../LogoBar';
import PropTypes from 'prop-types';
import CollectionNavbar from '../CollectionNavbar';
import CollectionTypesButton from '../CollectionTypesButton';
import ContentTypeBuilderButton from '../ContentTypeBuilderButton';
// import CollectionNavbar from '../CollectionNavbar';

function SideNavbar(props) {

  const { contentTypes } = props;
  const {setIsContentTypesLoaded} = props;
  const {setSelectedId} = props;
  const {selectedId} = props;

  console.log(contentTypes);

  // eslint-disable-next-line no-unused-vars 

  return (
    <div className='flex flex-col basis-1/4 bg-sidebar'>
      <LogoBar />
      <CollectionTypesButton  setIsContentTypesLoaded={setIsContentTypesLoaded} />
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
  setSelectedId: PropTypes.func,
  selectedId: PropTypes.string,
};

export default SideNavbar;
