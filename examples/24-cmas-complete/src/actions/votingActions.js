import * as types from "../constants/actionTypes";

import { voteRequest, completeVotingRequest } from "../services/api";

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

export const completeVoting = () => {
  return {
    type: types.COMPLETE_VOTING,
    payload: completeVotingRequest()
  };
};
