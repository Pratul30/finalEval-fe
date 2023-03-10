export const BACKEND_URL = 'http://localhost:4000/';

export const GET_ALL_CONTENT_TYPE = {
  url: 'content-types',
  method: 'get'
};

export const GET_ENTRIES_BY_CONTENT_TYPE = (id) => ({
  url: `entries/${id}`,
  method: 'get'
});

export const GET_ALL_FIELDS = (id) => ({
  url: `fields/${id}`,
  method: 'get'
});

export const CREATE_CONTENT_TYPE = {
  url: 'content-types',
  method: 'post'
};

export const UPDATE_FIELD = (id) => ({
  url: `fields/update/${id}`,
  method: 'post'
});
