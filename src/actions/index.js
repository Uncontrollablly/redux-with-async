export const setUserInfo = info => {
  return {
    type: 'SET_USER_INFO',
    payload: info
  };
};

export const clearUserInfo = () => {
  return {
    type: 'CLEAR_USER_INFO'
  };
};

const fetchInfoRequest = () => {
  return {
    type: 'FETCH_INFO_REQUEST'
  };
};

const fetchInfoReceive = data => {
  return {
    type: 'FETCH_INFO_RECEIVE',
    payload: data
  };
};

// redux-thunk
export const fetchInfo = () => dispatch => {
  dispatch(fetchInfoRequest());
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/info')
    .then(res => res.json())
    .then(data => dispatch(fetchInfoReceive(data)));
};
