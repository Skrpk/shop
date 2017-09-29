import constants from '../constants/authConstants';

const signUpRequest = data => ({
  type: constants.SIGN_UP_REQUEST,
  payload: data,
});

export default {
  signUpRequest,
};
