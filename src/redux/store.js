import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  filter,
  contacts,
  alert,
  name,
  number,
  loader,
} from './contacts/contactsReducer';

const middleWares = [thunk];
const rootMiddleWares = applyMiddleware(...middleWares);

const store = configureStore(
  {
    reducer: {
      filter,
      contacts,
      alert,
      name,
      number,
      loader,
    },
  },
  composeWithDevTools(rootMiddleWares),
);

export default store;
