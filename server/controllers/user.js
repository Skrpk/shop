import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { getUserByToken } from '../services/UserService';
import config from '../config';

import User from '../models/user';

async function checkUserExists(req, res, next) {
  User.find({
    [req.body.field]: req.body.val,
  })
    .then((data) => {
      if (data.length) {
        console.log('EXISTS');
        res.status(409).json({ [req.body.field]: `User with current ${req.body.field} already exists` });
      } else {
        console.log('NOT EXISTS');
        res.json({ success: true });
      }
    })
    .catch((error) => {
      throw error;
    });
}

async function getCurrentUser(req, res, next) {
  const { token } = req;
  let user;

  try {
    user = await getUserByToken(token);
  } catch ({ message }) {
    return next({
      status: 500,
      message,
    });
  }

  return res.json(user);
}

export default {
  checkUserExists,
  getCurrentUser,
};
