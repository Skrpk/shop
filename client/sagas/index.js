import { all, fork } from 'redux-saga/effects';

import {
  signUpSaga,
  checkUserExistsSaga,
} from './auth';

export default function* rootSaga() {
  yield all([
    fork(signUpSaga),
    fork(checkUserExistsSaga),
  ]);
}
