import axios from 'axios';

const signUp = data =>
  axios.post('/api/signup', data);

export default {
  signUp,
};
