import { connect } from "react-redux";
import Signin from "./Signin";
import { signin } from "../../actions/signinActions";

function mapStateToProps({ isLoading, hasError, isSigninInvalid }) {
  return {
    isLoading,
    hasError,
    isSigninInvalid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signin: (memberId, pinNumber) => dispatch(signin(memberId, pinNumber))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
