import { connect } from 'react-redux';

import FlashMessagesList from './FlashMessagesList';
import flashActions from '../../actions/flashActions';

const mapStateToProps = state => ({
  messages: state.flash.get('messages'),
});

const mapDispatchToProps = dispatch => ({
  deleteFlashMessage: id => dispatch(flashActions.deleteFlashMessage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList);
