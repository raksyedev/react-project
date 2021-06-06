import { call, fork, takeEvery, put, all } from 'redux-saga/effects';
import { GET_ME, LOGIN_USER, LOGOUT_USER } from './type';
import { loginUserSuccess, loginUserFailed, setUser } from './action';
import { request, setToken } from '../../utils';

function* login({ payload: user }) {
  try {
    const response = yield call(request.post, '/v1/token/', user);
    setToken(response.data);
    yield put(loginUserSuccess(response.data));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Server Error nih, coba lagi yaa :)';
        break;
      // write your case here...
      default:
        message = error;
    }
    yield put(loginUserFailed(message));
    setToken(null);
  }
}

function* logout({ payload: history }) {
  try {
    setToken(null);
    yield call(() => history.push('/login')); // push to your login path
  } catch (err) {
    console.log('Error HERE', err);
  }
}

function* getMe() {
  try {
    const response = yield call(request.get, '/v1/user'); // yout api path
    yield put(setUser(response.data)); // your response
  } catch (error) {
    let message;
    switch (error.response?.status) {
      case 500:
        message = 'Server Error nih, coba lagi yaa :)';
        break;
      // write your case here...
      default:
        message = error;
    }
    yield put(loginUserFailed(message));
  }
}

// watch login
export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login);
}

// watch logout
export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

// watch getme
export function* watchGetMe() {
  yield takeEvery(GET_ME, getMe);
}

function* authSagas() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser), fork(watchGetMe)]);
}

export default authSagas;
