import { Map } from 'immutable';
import isEmpty from 'lodash/isEmpty';

import constants from '../constants/authConstants';

const initialState = Map({
  isAuthenticated: false,
  user: {},
  errors: {},
});

export default(state = initialState, action = {}) => {
  switch (action.type) {
    case constants.SET_SIGNED_UP_USER: {
      return state
        .set('user', action.payload)
        .set('errors', {})
        .set('isAuthenticated', true);
    }
    case constants.AUTH_ERROR: {
      return state
        .set('errors', action.payload);
    }
    default:
      return state;
  }
};
