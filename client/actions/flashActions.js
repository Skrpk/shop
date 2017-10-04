import constants from '../constants/FlashMessages';

const addFlashMessage = message => ({
  type: constants.ADD_FLASH_MESSAGE,
  message,
});

const deleteFlashMessage = id => ({
  type: constants.DELETE_FLASH_MESSAGE,
  id,
});

export default {
  addFlashMessage,
  deleteFlashMessage,
};
