import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  filter,
  contacts,
  alert,
  name,
  number,
  loader,
} from './contacts/contactsReducer';
import token from './auth/authReducer';

const middleWares = [thunk];
const rootMiddleWares = applyMiddleware(...middleWares);
const rootReducer = combineReducers({
  filter,
  contacts,
  alert,
  name,
  number,
  loader,
  token,
});
const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(rootMiddleWares),
);
export const persistor = persistStore(store);
export default store;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import {
//   filter,
//   contacts,
//   alert,
//   name,
//   number,
//   loader,
// } from './contacts/contactsReducer';
// import token from './auth/authReducer';
// const middleWares = [thunk];
// const rootMiddleWares = applyMiddleware(...middleWares);
// const rootReducer = combineReducers({
//   filter,
//   contacts,
//   alert,
//   name,
//   number,
//   loader,
//   token,
// });

// const store = createStore(rootReducer, composeWithDevTools(rootMiddleWares));

// export default store;

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import {
//   filter,
//   contacts,
//   alert,
//   name,
//   number,
//   loader,
// } from './contacts/contactsReducer';

// const middleWares = [thunk];
// const rootMiddleWares = applyMiddleware(...middleWares);

// const store = configureStore(
//   {
//     reducer: {
//       filter,
//       contacts,
//       alert,
//       name,
//       number,
//       loader,
//     },
//   },
//   composeWithDevTools(rootMiddleWares),
// );

// export default store;
