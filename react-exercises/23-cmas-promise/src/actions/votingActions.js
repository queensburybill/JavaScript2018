import * as types from "../constants/actionTypes";

/**
 * Importing the function you just created from "src/services/api.js" here
 */
import { voteRequest } from "../services/api";

const ajaxLoading = () => {
  return {
    type: types.VOTE_PENDING
  };
};

const ajaxSuccess = (categoryId, nomineeIndex) => {
  return {
    type: types.VOTE_FULFILLED,
    categoryId,
    nomineeIndex
  };
};

const ajaxFailure = () => {
  return {
    type: types.VOTE_REJECTED
  };
};

export const vote = (categoryId, nomineeIndex) => {
  return dispatch => {
    dispatch(ajaxLoading());
    voteRequest(categoryId, nomineeIndex)
      .then(() => dispatch(ajaxSuccess(categoryId, nomineeIndex)))
      .catch(() => dispatch(ajaxFailure()));
  };
};

/**
 * Using redux promise only, complete the function below.
 * You can look at "src/ations/signinActions.js" as an example
 */
export const completeVoting = () => {};
