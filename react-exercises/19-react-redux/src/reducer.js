import * as types from "./constants/actionTypes";

/**
 * @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
const generateRandomDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const reducer = (
  state = {
    diceNumber: generateRandomDiceNumber(),
    count: 0,
    todos: [],
    userInput: ""
  },
  action
) => {
  switch (action.type) {
    case types.ROLL_DICE:
      return {
        ...state,
        diceNumber: generateRandomDiceNumber()
      };
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.userInput],
        userInput: ""
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          return index !== action.todoIndex;
        })
      };
    case types.SET_USER_INPUT:
      return {
        ...state,
        userInput: action.userInput
      };
    default:
      return state;
  }
};

export default reducer;
