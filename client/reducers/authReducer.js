import { Map } from 'immutable';
import isEmpty from 'lodash/isEmpty';

import constants from '../constants/authConstants';

const initialState = Map({
  isAuthenticated: false,
  user: {},
});

export default(state = initialState, action = {}) => {
  switch (action.type) {
    ////////////////////////////// probably SIGN_UP_REQUEST is incorrect constant
    case constants.SIGN_UP_REQUEST: {
      return state
        .set('user', action.payload)
        .set('isAuthenticated', !isEmpty(action.payload));
    }
    default:
      return state;
  }
};
