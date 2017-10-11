import User from '../models/user';

const getUserByToken = async function({ _id }) {
  let user;

  try {
    user = await User.find({ _id }, { password: 0 });
  } catch (e) {
    throw e;
  }

  return user;
};

export default {
  getUserByToken,
};
