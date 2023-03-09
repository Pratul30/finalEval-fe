import React from 'react';
import ContentTypesBar from '../../components/ContentTypesBar';
import SideNavbar from '../../components/SideNavbar';

function ContentPage() {
  return (
    <div className='flex min-h-screen bg-content-page'>
      <SideNavbar />
      <ContentTypesBar />
    </div>
  );
}

export default ContentPage;
