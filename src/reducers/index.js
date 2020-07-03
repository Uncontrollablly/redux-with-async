import { combineReducers } from 'redux';
import userInfo from './userInfo';
import fetchInfo from './fetchInfo';

const reducers = combineReducers({
  userInfo,
  fetchInfo
});

export default reducers;
