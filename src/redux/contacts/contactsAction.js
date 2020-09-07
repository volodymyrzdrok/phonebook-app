import { createAction } from '@reduxjs/toolkit';

import {
  ADD_CONTACT_SUCCESS,
  ALERT_STATUS,
  CHANGE_FILTER,
  NAME_CONTACT,
  NUMBER_CONTACT,
  INPUTCLEAR,
  ADD_CONTACT_STATUS,
  ERROR_STATUS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  REMOVE_STATUS,
  REMOVE_CONTACT,
  REMOVE_ERROR_STATUS,
} from './constantsConstants';

export const fetchContactsRequest = createAction(FETCH_REQUEST);
export const fetchContactsSuccess = createAction(FETCH_SUCCESS);
export const fetchContactsError = createAction(FETCH_ERROR);

export const addContactRequest = createAction(ADD_CONTACT_STATUS);
export const addContactSuccess = createAction(ADD_CONTACT_SUCCESS);
export const addContactError = createAction(ERROR_STATUS);

export const removeContactRequest = createAction(REMOVE_STATUS);
export const removeContactSuccess = createAction(REMOVE_CONTACT);
export const removeContactError = createAction(REMOVE_ERROR_STATUS);

// export const removeContact = id => ({
//   type: REMOVE_CONTACT,
//   payload: id,
// });

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const alert = () => ({
  type: ALERT_STATUS,
});
export const loader = () => ({
  type: ADD_CONTACT_STATUS,
});

export const changeName = name => ({
  type: NAME_CONTACT,
  payload: name,
});

export const changeNumber = number => ({
  type: NUMBER_CONTACT,
  payload: number,
});

export const inputClear = (name, number) => ({
  type: INPUTCLEAR,
});

// export const addcontact = createAction(ADD_CONTACT, (name, number) => ({
//   payload: { id: uuid(), name, number },
// }));

// export const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: { id: uuid(), name, number },
// });
