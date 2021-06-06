import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  GET_ME,
  SET_USER,
} from './type';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailed = (err) => ({
  type: LOGIN_USER_FAILED,
  payload: err?.response?.data, // your response if error
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

export const getMe = () => ({ type: GET_ME });

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
