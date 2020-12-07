// import {
//   ADD_CONTACT_SUCCESS,
//   ALERT_STATUS,
//   CHANGE_FILTER,
//   NAME_CONTACT,
//   NUMBER_CONTACT,
//   INPUTCLEAR,
//   ADD_CONTACT_STATUS,
//   ERROR_STATUS,
//   FETCH_REQUEST,
//   FETCH_SUCCESS,
//   FETCH_ERROR,
//   REMOVE_STATUS,
//   REMOVE_CONTACT,
//   REMOVE_ERROR_STATUS,
// } from './constantsConstants';

// import { LOADER_ON, LOADER_OFF } from '../auth/errorAndLoaderAction';

// export const contacts = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_SUCCESS:
//       return action.payload;
//     case ADD_CONTACT_SUCCESS:
//       return [action.payload, ...state];
//     case REMOVE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const name = (state = '', action) => {
//   switch (action.type) {
//     case NAME_CONTACT:
//       return action.payload;
//     case INPUTCLEAR:
//       return '';

//     default:
//       return state;
//   }
// };

// export const number = (state = '', action) => {
//   switch (action.type) {
//     case NUMBER_CONTACT:
//       return action.payload;
//     case INPUTCLEAR:
//       return '';

//     default:
//       return state;
//   }
// };

// export const filter = (state = '', action) => {
//   switch (action.type) {
//     case CHANGE_FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export const alert = (state = false, action) => {
//   switch (action.type) {
//     case ALERT_STATUS:
//       return !state;

//     default:
//       return state;
//   }
// };

// export const loader = (state = false, action) => {
//   switch (action.type) {
//     case ADD_CONTACT_STATUS:
//     case FETCH_REQUEST:
//     case REMOVE_STATUS:
//     case LOADER_ON:
//       return true;

//     case ADD_CONTACT_SUCCESS:
//     case ERROR_STATUS:
//     case FETCH_SUCCESS:
//     case FETCH_ERROR:
//     case REMOVE_CONTACT:
//     case REMOVE_ERROR_STATUS:
//     case LOADER_OFF:
//       return false;

//     default:
//       return state;
//   }
// };
