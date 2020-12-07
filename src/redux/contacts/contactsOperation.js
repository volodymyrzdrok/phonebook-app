// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// } from './contactsAction';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  loaderOff,
  loaderOn,
} from '../slice';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const addContactOperation = (obj, token) => async dispatch => {
  try {
    dispatch(addContactRequest());
    const result = await axios({
      url: `/contacts`,
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
      data: obj,
    });
    dispatch(loaderOn());
    dispatch(addContactSuccess(result.data));
  } catch {
    dispatch(addContactError('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};

export const fetchContactsOperation = token => async dispatch => {
  try {
    dispatch(fetchContactsRequest());
    const result = await axios({
      url: `/contacts`,
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(loaderOn());
    dispatch(fetchContactsSuccess(result.data));
  } catch {
    dispatch(fetchContactsError('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};

export const removeContactOperation = (id, token) => async dispatch => {
  try {
    dispatch(removeContactRequest());
    await axios({
      url: `/contacts/${id}`,
      method: 'delete',
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(loaderOn());
    dispatch(removeContactSuccess(id));
  } catch {
    dispatch(removeContactError('erooororrr'));
  } finally {
    dispatch(loaderOff());
  }
};
