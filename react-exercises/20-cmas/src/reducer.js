/**
 * Import action types from "src/constants/actionTypes.js"
 */

import categories from "./constants/categories";

const reducer = (
  state = {
    /* Define default state here */
  },
  action
) => {
  switch (action.type) {
    /**
     * Create a case for each action that returns a new state
     */
    default:
      return state;
  }
};

export default reducer;
