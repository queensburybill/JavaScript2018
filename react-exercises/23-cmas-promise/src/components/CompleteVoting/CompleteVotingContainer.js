import { connect } from "react-redux";
import CompleteVoting from "./CompleteVoting";
import { completeVoting } from "../../actions/votingActions";

function mapStateToProps({ isComplete, isLoading, hasError, isSigninValid }) {
  return {
    isComplete,
    isLoading,
    hasError,
    isSigninValid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    completeVoting: () => dispatch(completeVoting())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteVoting);
