import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
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
const rootReducer = combineReducers({
  filter,
  contacts,
  alert,
  name,
  number,
  loader,
});

const store = createStore(rootReducer, composeWithDevTools(rootMiddleWares));

export default store;
