import browserHistory from 'react-router';

import constants from '../constants/appConstants';

const changeCurrentScreen = (page) => {
  browserHistory.push('/');

  return {
    type: constants.CHANGE_CURRENT_SCREEN,
    payload: page,
  };
};

export default {
  changeCurrentScreen,
};
