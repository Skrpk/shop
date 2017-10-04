import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-as-promised';

import User from '../models/user';
import config from '../config';
import ValidateSignUpInput from '../shared/validations/signUp';

const signUp = async (req, res, next) => {
  const credentials = req.body;
  let user;

  const { errors, isValid } = ValidateSignUpInput(credentials);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    try {
      const passwordDigest = bcrypt.hashSync(credentials.password, 10);
      credentials.password = passwordDigest;
      user = await User.create(credentials);

      const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
      }, config.secret);

      res.json({ token });
    } catch ({ message }) {
      return next({
        status: 400,
        message,
      });
    }

    res.json(user);
  }
};

async function signIn(req, res, next) {
  const { identifier, password } = req.body;
  let user;

  try {
    user = await User.findOne({
      $or: [
        { username: identifier },
        { email: identifier },
      ],
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }

  if (user) {
    try {
      const result = await user.comparePasswords(password);
      const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
      }, config.secret);

      res.json({ token });
      next();
    } catch (e) {
      res.status(404).json({ signin: 'Invalid credentials' });
    }
  } else {
    res.status(404).json({ signin: 'Invalid credentials' });
  }
}

export default {
  signUp,
  signIn,
};
