import axios from 'axios';
import { AUTH_URL } from '../../constants/authEndPoints';
axios.defaults.headers.common['authorization'] = 'Bearer QWlzaHdhcnlhIE4=';

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
  console.log(data);
  return data;
};

export default makeAuthRequest;



