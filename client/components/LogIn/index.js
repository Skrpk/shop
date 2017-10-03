import { connect } from 'react-redux';

import SignInPage from './SignInPage';
import authActions from '../../actions/authActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  signInRequest: data => dispatch(authActions.signInRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
