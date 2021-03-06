import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const ValidateSignUpInput = (data) => {
  const errors = {};

  if (Validator.isNull(data.username)) {
    errors.username = 'This field is required';
  }

  if (Validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'This email is invalid';
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }

  if (Validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    errors,
    isValid: !isEmpty(errors),
  };
};

export default ValidateSignUpInput;
