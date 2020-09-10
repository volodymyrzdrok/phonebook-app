export const SET_TOKEN = '@token/set';
export const RESET_TOKEN = '@token/reset';
export const SET_USER_NAME = '@user/add_user_name';
export const RESET_USER_NAME = '@user/remove_user_name';

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const resetToken = () => ({
  type: RESET_TOKEN,
});

export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName,
});
export const resetUserName = () => ({
  type: RESET_USER_NAME,
});
