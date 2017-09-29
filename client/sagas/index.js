import signUpSaga from './auth';

export default function* rootSaga() {
  yield signUpSaga();
}
