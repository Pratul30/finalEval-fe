import React from 'react';
import LogoBar from '../LogoBar';
import PropTypes from 'prop-types';
import CollectionNavbar from '../CollectionNavbar';
// import CollectionNavbar from '../CollectionNavbar';

function SideNavbar(props) {

  const { contentTypes } = props;
  console.log(contentTypes);

  return (
    <div className='flex flex-col basis-1/4 bg-black'>
      <LogoBar />
      {
        contentTypes.map((contentType) => {
          // eslint-disable-next-line react/jsx-key
          return ( <CollectionNavbar contentTypeName={contentType.cTypeName} />);
        }
        )
      }
    </div>
  );
}

SideNavbar.propTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.object)
};

export default SideNavbar;
