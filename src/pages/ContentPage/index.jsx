import React, { useEffect, useState } from 'react';
import ContentTypesBar from '../../components/ContentTypesBar';
import SideNavbar from '../../components/SideNavbar';
import ContentTypeBody from '../../components/ContentTypeBody';
import { makeBackendRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_CONTENT_TYPE } from '../../constants/apiEndPoints';

function ContentPage() {

  const [contentTypes, setContentTypes] = useState([{}]);

  useEffect(() => {
    makeBackendRequest(GET_ALL_CONTENT_TYPE).then(
      (response) => {
        Promise.resolve(response).then(() => {
          setContentTypes(response);
          console.log(response);
        });
      }
    );
  }, []);

  return (
    <div className='flex flex-row min-h-screen bg-content-page'>
      <SideNavbar contentTypes = {contentTypes} />
      <div className='flex flex-col w-full bg-content-page text-black'>
        <ContentTypesBar />
        <ContentTypeBody contentTypes = {contentTypes} />
      </div>   
    </div>
  );
}

export default ContentPage;
