import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    fetchContactsSuccess: (state, action) => action.payload,
    addContactSuccess: (state, action) => [action.payload, ...state],
    removeContactSuccess: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    changeName: (state, action) => action.payload,
    inputClear: (state, action) => (state = ''),
  },
});

const numberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    changeNumber: (state, action) => action.payload,
    inputClearNumber: (state, action) => (state = ''),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

const alertSlice = createSlice({
  name: 'alert',
  initialState: false,
  reducers: {
    alertAction: (state, action) => !state,
  },
});

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    addContactRequest: (state, action) => (state = true),
    fetchContactsRequest: (state, action) => (state = true),
    removeContactRequest: (state, action) => (state = true),
    loaderOn: (state, action) => (state = true),
    // addContactSuccess: (state, action) => (state = false),
    addContactError: (state, action) => (state = false),
    // fetchContactsSuccess: (state, action) => (state = false),
    fetchContactsError: (state, action) => (state = false),
    // removeContactSuccess: (state, action) => (state = false),
    removeContactError: (state, action) => (state = false),
    loaderOff: (state, action) => (state = false),
  },
});

const tokenSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken: (state, action) => action.payload,
    resetToken: (state, action) => (state = null),
  },
});
const userNameSlice = createSlice({
  name: 'userName',
  initialState: '',
  reducers: {
    setUserName: (state, action) => action.payload,
    resetUserName: (state, action) => (state = ''),
  },
});

export const {
  fetchContactsSuccess,
  addContactSuccess,
  removeContactSuccess,
} = contactsSlice.actions;
export const { changeName, inputClear } = nameSlice.actions;
export const { changeNumber, inputClearNumber } = numberSlice.actions;
export const { changeFilter } = filterSlice.actions;
export const { alertAction } = alertSlice.actions;
export const {
  loaderOff,
  loaderOn,
  removeContactError,
  fetchContactsError,
  addContactRequest,
  addContactError,
  // fetchContactsSuccess,
  // addContactSuccess,
  // removeContactSuccess,
  removeContactRequest,
  fetchContactsRequest,
} = loaderSlice.actions;

export const { setToken, resetToken } = tokenSlice.actions;
export const { setUserName, resetUserName } = userNameSlice.actions;

const filter = filterSlice.reducer;
const contacts = contactsSlice.reducer;
const alert = alertSlice.reducer;
const name = nameSlice.reducer;
const number = numberSlice.reducer;
const loader = loaderSlice.reducer;
const token = tokenSlice.reducer;
const userName = userNameSlice.reducer;

export default combineReducers({
  filter,
  contacts,
  alert,
  name,
  number,
  loader,
  token,
  userName,
});
