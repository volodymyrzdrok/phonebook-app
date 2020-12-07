// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   filter,
//   contacts,
//   alert,
//   name,
//   number,
//   loader,
// } from './contacts/contactsReducer';
// import token from './auth/authReducer';
// import { userName } from './auth/authReducer';

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
//   userName,
// });
// const persistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['token', 'userName'],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(rootMiddleWares),
// );
// export const persistor = persistStore(store);
// export default store;

//======================================================

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allReducersSlice from './slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'userName'],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, allReducersSlice),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
