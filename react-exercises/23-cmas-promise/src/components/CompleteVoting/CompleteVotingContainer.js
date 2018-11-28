import { connect } from "react-redux";
import CompleteVoting from "./CompleteVoting";

/**
 * Import your action creator from "src/actions/votingActions.js"
 */

/**
 * Send the pieces of state that you need here.
 * Hint: take a look at the reducer and see what the "COMPLETE_VOTING_FULFILLED",
 * "COMPLETE_VOTING_PENDING", and "COMPLETE_VOTING_REJECTED" are setting.
 * Look at the other container files as an example for help.
 */
function mapStateToProps() {
  return {};
}

/**
 * Complete this function, passing your action creator down as props
 * Look at the other container files as an example for help.
 */
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteVoting);
