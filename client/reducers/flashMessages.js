import { Map } from 'immutable';
import shortid from 'shortid'

import constants from '../constants/FlashMessages';

const initialState = Map({
  messages: [],
});

export default (store = initialState, action = {}) => {
  switch (action.type) {
    case constants.ADD_FLASH_MESSAGE: {
      return store
        .update('messages', arr => arr.concat([{
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        }]));
    }
    case constants.DELETE_FLASH_MESSAGE: {
      return store
        .update('messages', arr => arr.filter(element => element.id !== action.id));
    }
    default:
      return store;
  }
};
