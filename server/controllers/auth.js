import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pick from 'lodash/pick';
import brain from 'brain';
import fs from 'fs';
import mnist from 'mnist';

import User from '../models/user';
import config from '../config';
import ValidateSignUpInput from '../shared/validations/signUp';
import transporter from '../services/transporter';

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

      jwt.sign(
        {
          user: pick(user, 'email'),
        },
        config.EMAIL_SECRET,
        {
          expiresIn: '1d',
        },
        (err, emailToken) => {
          if (err) {
            throw err;
          }

          const url = `http://localhost:${config.port}/confirmation/${emailToken}`;

          transporter.sendMail({
            to: user.email,
            subject: 'Confirm Email',
            html: `Please click this link to confirm your email: <a href=${url}>${url}</a>`,
          });
        }
      );

      res.json({ success: true });
    } catch ({ message }) {
      console.log(message);
      return next({
        status: 400,
        message,
      });
    }
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
    if (!user.confirmed) {
      return res.status(404).json({ signin: 'Please confirm your email to login' });
    }
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

function neural(req, res, next) {
  const net = new brain.NeuralNetwork();
  const set = mnist.set(1000, 0);
  const trainingSet = set.training;

  console.log(111);
  net.train(
    trainingSet,
    {
      errorThresh: 0.005,
      iterations: 20000,
      log: true,
      logPeriod: 1,
      learningRate: 0.3,
    },
  );

  // const wstream = fs.createWriteStream('./data/mnistTrain.json');
  console.log(net.toJSON());
  // wstream.write(JSON.stringify(net.toJSON(), null, 2));
  // wstream.end();

  next();
}

export default {
  signUp,
  signIn,
  neural,
};
