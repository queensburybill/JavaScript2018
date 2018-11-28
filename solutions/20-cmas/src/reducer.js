/**
 * Import action types from "src/constants/actionTypes.js"
 */

import * as types from "./constants/actionTypes";

const reducer = (
  state = {
    /* Define default state here */
    memberId: null,
    votes: {}
  },
  action
) => {
  switch (action.type) {
    /**
     * Create a case for each action that returns a new state
     */
    case types.SIGNIN:
      return {
        ...state,
        memberId: action.memberId
      };
    case types.FETCH_ALL_NOMINEES: {
      const { categories } = action.payload;
      return {
        ...state,
        categories
      };
    }
    case types.VOTE: {
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.categoryId]: action.nomineeIndex
        }
      };
    }
    case types.COMPLETE_VOTING:
      return {
        ...state,
        isComplete: true
      };
    default:
      return state;
  }
};

export default reducer;
