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

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// axios.defaults.baseURL = 'http://localhost:4000';

const options = {
  headers: { 'Content-Type': 'application/json' },
};
export const addContactOperation = (name, number) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('https://goit-phonebook-api.herokuapp.com/contacts', { name, number })
    .then(response => {
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => dispatch(addContactError(error)));
};

export const fetchContactsOperation = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('https://goit-phonebook-api.herokuapp.com/contacts')
    .then(response => {
      dispatch(fetchContactsSuccess(response.data));
    })
    .catch(error => dispatch(fetchContactsError(error)));
};

export const removeContactOperation = id => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`https://goit-phonebook-api.herokuapp.com/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => dispatch(removeContactError(error)));
};
