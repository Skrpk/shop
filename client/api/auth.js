import axios from 'axios';

const signUp = data =>
  axios.post('/api/signup', data);

const signIn = data =>
  axios.post('/api/signin', data);

export default {
  signUp,
  signIn,
};
