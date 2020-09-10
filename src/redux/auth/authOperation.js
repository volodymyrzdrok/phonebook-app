import axios from 'axios';
import { loaderOff, loaderOn, errorOn } from './errorAndLoaderAction';
import {
  setToken,
  resetToken,
  setUserName,
  resetUserName,
} from './authAction.js';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const registrOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/users/signup', userData);
    dispatch(setToken(result.data.token));
    dispatch(setUserName(result.data.user.name));
  } catch {
    dispatch(errorOn('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};

export const loginOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/users/login', userData);
    dispatch(setToken(result.data.token));
    dispatch(setUserName(result.data.user.name));
  } catch {
    dispatch(errorOn('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};

export const logOut = token => async dispatch => {
  try {
    dispatch(loaderOn());
    await axios({
      url: '/users/logout',
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(resetToken());
    dispatch(resetUserName());
  } catch {
    dispatch(errorOn('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};
