import axios from 'axios';
import { AUTH_URL } from '../../constants/authEndPoints';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeAuthRequest = async (
  apiEndPoint,
  dynamicConfig = {},
) => {
  const requestDetails = {
    baseURL: AUTH_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

const makeBackendRequest = async (
  apiEndPoint,
  dynamicConfig = {},
) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

export { makeAuthRequest, makeBackendRequest };



