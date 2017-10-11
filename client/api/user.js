import axios from 'axios';

const checkUserExists = data =>
  axios.post('/api/users/exists', data);

export default {
  checkUserExists,
};
