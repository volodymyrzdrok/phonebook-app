// import { createAction } from '@reduxjs/toolkit';

// //
// //
// //
// export const registerRequest = createAction('auth/registerRequest');
// export const registerSuccess = createAction('auth/registerSuccess');
// export const registerError = createAction('auth/registerError');

// export const loginRequest = createAction('auth/loginRequest');
// export const loginSuccess = createAction('auth/loginSuccess');
// export const loginError = createAction('auth/loginError');

export const SET_TOKEN = '@token/set';
export const RESET_TOKEN = '@token/reset';

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const resetToken = () => ({
  type: RESET_TOKEN,
});
