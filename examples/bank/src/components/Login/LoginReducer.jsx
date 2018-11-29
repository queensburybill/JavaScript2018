import * as types from '../../actions/types';

const initialState = {};
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.SET_USER: {
      return {
        user: { ...state, user: action.User, completed: true }
      };
    }
    case types.GET_USER: {
      return state.user;
    }

    default:
      return state;
  }
}
