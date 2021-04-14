import {put, takeLatest, call} from 'redux-saga/effects';

import { USER } from '../../constants';
import { logIn } from '../../api/logIn';

function* loginUser(action) {
  const {password} = action.payload;
  const response = yield call(logIn);

  if (password === response.user) {
    yield put({ type: USER.LOGIN_REQUEST_SUCCESS, payload: response.token});
  }
  else {
    yield put({ type: USER.LOGIN_REQUEST_ERROR, payload: true});
  }
}

function* logOutUser() {

    yield put({ type: USER.LOGOUT_REQUEST_SUCCESS, payload: false});
}

export default function* watchUser() {
  yield takeLatest(USER.LOGIN_REQUEST, loginUser)
  yield takeLatest(USER.LOGOUT_REQUEST, logOutUser)
};
