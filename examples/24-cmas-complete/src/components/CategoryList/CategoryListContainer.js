import { connect } from "react-redux";
import CategoryList from "./CategoryList";

import { fetchAllNominees } from "../../actions/fetchAllNomineesActions";

function mapStateToProps({ categories, isLoading, hasError }) {
  return {
    categories,
    isLoading,
    hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllNominees: () => dispatch(fetchAllNominees())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
