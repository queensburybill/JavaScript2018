import * as types from "./constants/actionTypes";

import categories from "./constants/categories";

const reducer = (
  state = {
    id: "",
    categories: {},
    selections: {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
    }
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        id: action.id
      };
    case types.GET_NOMINEES:
      return {
        ...state,
        categories: action.getNominees()
      };
    case types.SUBMIT_VOTE:
      return {
        ...state,
        selections: { 
          ...state.selections,
          [action.categoryNumber]: state.categories.categoryNumber.nominees[action.index] 
        }
      };
      case types.FINISH_VOTING:
        return {
          ...state,
          id: action.finishVoting()
        };
    default:
      return state;
  }
};

export default reducer;
