import { take, call, put, takeEvery } from 'redux-saga/effects';

import api from '../api/auth';
import userApi from '../api/user';
import constants from '../constants/authConstants';

function* signUpRequest({ payload }) {
  try {
    const receivedData = yield call(api.signUp, payload);

    yield put({
      type: constants.SET_SIGNED_UP_USER,
      payload: receivedData,
    });
  } catch (e) {
    yield put({
      type: constants.SIGN_UP_ERROR,
      payload: e.response.data,
    });
  }
}

export function* signUpSaga() {
  yield takeEvery(constants.SIGN_UP_REQUEST, signUpRequest);
}

function* checkUserExists({ payload }) {
  yield call(userApi.checkUserExists, payload);
}

export function* checkUserExistsSaga() {
  yield takeEvery(constants.IS_USER_EXISTS, checkUserExists);
}
