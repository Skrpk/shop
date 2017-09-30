import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';
import ValidateSignUpInput from '../shared/validations/signUp';

const signUp = async (req, res, next) => {
  const credentials = req.body;
  let user;

  console.log('Request is here');
  const { errors, isValid } = ValidateSignUpInput(credentials);

  if (!isValid) {
    console.log('res.status(400).json(errors);');
    res.status(400).json(errors);
  } else {
    console.log('try');
    try {
      user = await User.create(credentials);
    } catch ({ message }) {
      return next({
        status: 400,
        message,
      });
    }

    res.json(user);
  }
};

export default {
  signUp,
};
