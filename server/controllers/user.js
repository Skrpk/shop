import { getUserByToken } from '../services/UserService';

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
