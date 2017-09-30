import { take, call, put } from 'redux-saga/effects';

import api from '../api/auth';
import constants from '../constants/authConstants';

function* signUpRequest(data) {
  try {
    const receivedData = yield call(api.signUp, data);
  } catch (e) {
    console.log(e.response.data);
    yield put({
      type: constants.SIGN_UP_ERROR,
      payload: e.response.data,
    });
  }
}

export default function* signUpSaga() {
  while (true) {
    const { payload } = yield take(constants.SIGN_UP_REQUEST);
    yield call(signUpRequest, payload);
  }
}
