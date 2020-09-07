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
} from './contactsAction';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const addContactOperation = (name, number) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(response => {
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => dispatch(addContactError(error)));
};

export const fetchContactsOperation = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(response => {
      dispatch(fetchContactsSuccess(response.data));
    })
    .catch(error => dispatch(fetchContactsError(error)));
};

export const removeContactOperation = id => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => dispatch(removeContactError(error)));
};
