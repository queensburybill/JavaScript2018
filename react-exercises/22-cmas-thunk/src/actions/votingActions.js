import * as types from "../constants/actionTypes";

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
  console.log(categoryId, nomineeIndex);
  return dispatch => {
    /**
     * Using "src/actions/fetchAllNomineesActions.js" as an example, do the following:
     * - dispatch the loading ajax action
     * - call on and pass the necesarry arguements to the voteRequest function
     * (see "src/services/api.js")
     * - dispatch the ajaxSuccess action when the ajax request is successfully,
     * passing all the necessary arguments
     * - dispatch the ajax request failure action when an error is caught
     */
    dispatch(ajaxLoading());
    voteRequest(categoryId, nomineeIndex)
      .then(() => dispatch(ajaxSuccess(categoryId, nomineeIndex)))
      .catch(() => dispatch(ajaxFailure()));
  };
};
