import * as types from "./constants/actionTypes";

import categories from "./constants/categories";

const reducer = (
  state = {
    id: "",
    pin: null,
    selections: [],
    categories: {
      "1": {
        category: "Entertainer of the Year", 
        nominees: []
      },
      "2": {
        category: "Album of the Year", 
        nominees: []
      },
      "3": {
        category: "Female Vocalist of the Year", 
        nominees: []
      },
      "4": {
        category: "Male Vocalist of the Year", 
        nominees: []
      }
    }
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        id: action.id,
        pin: action.pin
      };
    case types.SUBMIT_VOTE:
      return {
        ...state,
        selections: 
      }
    default:
      return state;
  }
};

export default reducer;
