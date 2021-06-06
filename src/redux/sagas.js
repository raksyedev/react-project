import { call } from 'redux-saga/effects';
import authSagas from './auth/saga';

export default function* rootSaga() {
  yield call(() => authSagas);

  // if need more sagas, use here

  // yield all([authSagas, yourSagas])
}
