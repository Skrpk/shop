import { combineReducers } from 'redux';

import auth from './authReducer';
import app from './appReducer';
import flash from './flashMessages';

export default combineReducers({
  auth,
  app,
  flash,
});
