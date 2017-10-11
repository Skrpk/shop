import { Map } from 'immutable';

import constants from '../constants/appConstants';

const initialState = Map({
  currentPage: '',
  previousPage: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_CURRENT_SCREEN: {
      return state
        .set('previousPage', state.get('currentPage'))
        .set('currentPage', action.payload);
    }
    default:
      return state;
  }
};
