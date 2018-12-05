import * as types from "./constants/actionTypes";

const reducer = (
  state = {
    memberId: null,
    votes: {}
  },
  action
) => {
  switch (action.type) {
    case types.SIGNIN_FULFILLED: {
      const { isSuccess, memberId } = action.payload;
      return isSuccess
        ? {
            ...state,
            memberId,
            isSigninInvalid: false,
            isLoading: false,
            hasError: false
          }
        : {
            ...state,
            isSigninInvalid: true,
            isLoading: false,
            hasError: false
          };
    }
    case types.FETCH_ALL_NOMINEES_FULFILLED: {
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        isLoading: false,
        hasError: false
      };
    }
    case types.VOTE_FULFILLED: {
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.categoryId]: action.nomineeIndex
        },
        isLoading: false,
        hasError: false
      };
    }
    case types.COMPLETE_VOTING_FULFILLED:
      return {
        ...state,
        isComplete: true,
        isLoading: false,
        hasError: false
      };
    case types.SIGNIN_PENDING:
    case types.FETCH_ALL_NOMINEES_PENDING:
    case types.VOTE_PENDING:
    case types.COMPLETE_VOTING_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        isSigninInvalid: false
      };
    case types.SIGNIN_REJECTED:
    case types.FETCH_ALL_NOMINEES_REJECTED:
    case types.VOTE_REJECTED:
    case types.COMPLETE_VOTING_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        isSigninInvalid: false
      };
    default:
      return state;
  }
};

export default reducer;
