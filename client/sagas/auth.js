import { take, call, put, takeEvery, select } from 'redux-saga/effects';

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
  const auth = yield select(state => state.auth);
  try {
    yield call(userApi.checkUserExists, payload);

    const newErrorObj = {...auth.get('errors')};
    delete newErrorObj[payload.field];
    yield put({
      type: constants.SIGN_UP_ERROR,
      payload: newErrorObj,
    });
  } catch (error) {
    yield put({
      type: constants.SIGN_UP_ERROR,
      payload: { ...auth.get('errors'), [payload.field]: error.response.data[payload.field] },
    });
  }
}

export function* checkUserExistsSaga() {
  yield takeEvery(constants.IS_USER_EXISTS, checkUserExists);
}
