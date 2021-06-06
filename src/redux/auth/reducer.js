import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  GET_ME,
  SET_USER,
} from './type';
import { getAuthToken } from '../../utils';

const intialState = {
  token: getAuthToken(),
  loading: false,
  user: null,
  error: null,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload, loading: false };
    case LOGOUT_USER:
      return { ...state, user: null, token: null };
    case GET_ME:
      return { ...state, loading: true, auth: true };
    case SET_USER:
      return { ...state, user: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;
