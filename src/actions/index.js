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

export const logOut = () => {
  return {
    type: 'LOG_OUT'
  };
};

// redux-thunk
export const fetchUserInfo = () => dispatch => {
  dispatch(fetchInfoRequest());
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(fetchInfoReceive(data));
    });
};
