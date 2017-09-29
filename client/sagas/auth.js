import { takeEvery, call, put } from 'redux-saga/effects';

import api from '../api/auth';
import constants from '../constants/authConstants';

function* signUpRequest(action) {
  console.log('Saga calls here!')
  const user = yield call(api.signUp, action.payload);
  console.log(user);
}

export default function* signUpSaga() {
  yield takeEvery(constants.SIGN_UP_REQUEST, signUpRequest);
}
