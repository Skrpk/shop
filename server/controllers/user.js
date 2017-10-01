import { getUserByToken } from '../services/UserService';
import User from '../models/user';

async function checkUserExists(req, res, next) {
  User.find({
    [req.params.identifier]: req.params.value,
  })
    .then((data) => {
      console.log(`EXISTS ${data}`);
    })
    .catch((data) => {
      console.log(`NOT EXISTS ${data}`);
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

export default getCurrentUser;
