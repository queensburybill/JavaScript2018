import { connect } from "react-redux";
import { completeVoting } from "../../actions/votingActions";
import CompleteVoting from "./CompleteVoting";

function mapStateToProps({ isLoading, hasError, isComplete }) {
  return {
    isLoading,
    hasError,
    isComplete
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
