import { connect } from "react-redux";
import Counter from "./Counter";

import { increment, decrement } from "../../actions";

function mapStateToProps({ count }) {
  return {
    count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
