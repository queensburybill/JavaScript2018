import * as types from "../constants/actionTypes";

import { voteRequest } from "../services/api";

/**
 * Using "src/actions/fetchAllNomineesActions.js" as an example, setup action creators for:
 * - loading ajax request
 * - ajax request failure
 */

const ajaxSuccess = (categoryId, nomineeIndex) => {
  /**
   * Complete this function
   */
};

export const vote = (categoryId, nomineeIndex) => {
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
  };
};
