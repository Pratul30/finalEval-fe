import React, { useEffect, useState } from 'react';
import ContentTypesBar from '../../components/ContentTypesBar';
import SideNavbar from '../../components/SideNavbar';
import ContentTypeBody from '../../components/ContentTypeBody';
import { makeBackendRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_CONTENT_TYPE } from '../../constants/apiEndPoints';
import CollectionBody from '../../components/CollectionBody';

function ContentPage() {

  const [contentTypes, setContentTypes] = useState([{}]);
  const [isContentTypesLoaded, setIsContentTypesLoaded] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    makeBackendRequest(GET_ALL_CONTENT_TYPE).then(
      (response) => {
        Promise.resolve(response).then(() => {
          setContentTypes(response);
          setIsContentTypesLoaded(false);
          console.log('selectedId from parent',selectedId);
          console.log(response);
        });
      }
    );
  }, [selectedId]);

  return (
    <div className='flex flex-row min-h-screen bg-content-page font-montserrat'>
      <SideNavbar contentTypes = {contentTypes} selectedId={selectedId} setIsContentTypesLoaded={setIsContentTypesLoaded} setSelectedId={setSelectedId} />
      <div className='flex flex-col w-full bg-content-page text-black'>
        <ContentTypesBar />

        {isContentTypesLoaded && <ContentTypeBody contentTypes = {contentTypes} />}
        {!isContentTypesLoaded && <CollectionBody selectedId={selectedId} />}
        
      </div>   
    </div>
  );
}

export default ContentPage;
