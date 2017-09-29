import { connect } from 'react-redux';

import SignUpPage from './SignUpPage';
import authActions from '../../actions/authActions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  userSignUpRequest: data => dispatch(authActions.signUpRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
