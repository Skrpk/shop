import constants from '../constants/authConstants';

const signUpRequest = data => ({
  type: constants.SIGN_UP_REQUEST,
  payload: data,
});

const isUserExists = data => ({
  type: constants.IS_USER_EXISTS,
  payload: data,
});

export default {
  signUpRequest,
};
