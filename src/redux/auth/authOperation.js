import axios from 'axios';
import { loaderOff, loaderOn, errorOn } from './errorAndLoaderAction';
import { setToken, resetToken } from './authAction.js';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const registrOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      'https://goit-phonebook-api.herokuapp.com/users/signup',
      userData,
    );
    dispatch(setToken(result.data.token));
  } catch {
    dispatch(errorOn('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};

export const loginOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      'https://goit-phonebook-api.herokuapp.com/users/login',
      userData,
    );
    dispatch(setToken(result.data.token));
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
      url: 'https://goit-phonebook-api.herokuapp.com/users/logout',
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(resetToken());
  } catch {
    dispatch(errorOn('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};
