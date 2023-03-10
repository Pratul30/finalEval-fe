/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeBackendRequest } from '../../utils/makeRequest/makeRequest';
// eslint-disable-next-line no-unused-vars
import { GET_ALL_FIELDS, GET_ENTRIES_BY_CONTENT_TYPE } from '../../constants/apiEndPoints';

function CollectionBody({ selectedId }) {

  const [fields, setFields] = useState([]);
  const [entries, setEntries] = useState([{
    entry: []
  }]);

  console.log('selectedId from collection body',selectedId);

  // let fieldValues = [];

  // useEffect(() => {
  //   makeBackendRequest(GET_ALL_FIELDS(selectedId)).then(
  //     (response) => {
  //       Promise.resolve(response).then((res) => {
  //         setFields(res[0].attributes);
  //         makeBackendRequest(GET_ENTRIES_BY_CONTENT_TYPE(selectedId)).then(
  //           (response) => {
  //             Promise.resolve(response).then((res) => {
  //               console.log('res',res);
  //               setEntries(res);
  //               // {
  //               //   if(Object.values(res[0].fields).length > 0) fieldObj = res[0].fields; 
  //               // }
  //             });
  //           }
  //         );
  //       });
  //     }
  //   );
  // }, []);

  useEffect(() => {
    makeBackendRequest(GET_ALL_FIELDS(selectedId)).then(
      (response) => {
        Promise.resolve(response).then((res) => {
          console.log('res fields',res);
          setFields(res[0].attributes);
          makeBackendRequest(GET_ENTRIES_BY_CONTENT_TYPE(selectedId)).then(
            (response) => {
              Promise.resolve(response).then((res) => {
                console.log('res',res);
                setEntries(res);
                // {
                //   if(Object.values(res[0].fields).length > 0) fieldObj = res[0].fields; 
                // }
              });
            }
          );
        });
      }
    );
  }, [selectedId]);

  console.log('entries',entries);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between m-5'>
        {
          fields.length > 0 && fields.map((field) => {
            return (
            // eslint-disable-next-line react/jsx-key
              <div>
                {field}
              </div>
            );
          })
        }
        <div>
        Actions
        </div>
      </div>
      <div>
        {
          entries.length > 0 && entries.map((entry) => {
            return (
              <div className='flex justify-between m-5'>
                {
                  fields.length > 0 && fields.map((field) => {
                    return (
                    // eslint-disable-next-line react/jsx-key
                      <div>
                        {entry.fields[field]}
                      </div>
                    );
                  })
                }
                <div>
                  Actions
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

CollectionBody.propTypes = {
  selectedId: PropTypes.string,
};

export default CollectionBody;
