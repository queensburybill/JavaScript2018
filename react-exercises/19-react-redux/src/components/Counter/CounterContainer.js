/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://redux.js.org/basics/usagewithreact#implementing-container-components
 */

import { connect } from "react-redux";
import Counter from "./Counter";
import { increment, decrement } from "../../actions";

/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

/**
 * Complete this function. You may need to pass in arguements
 */
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
