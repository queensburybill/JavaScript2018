import * as type from "./constants/actionTypes";

const reducer = (
  state = {
    count: 0,
    todos: []
  },
  action
) => {
  switch (action.type) {
    case type.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case type.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case type.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.userInput]
      };
    case type.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          return index !== action.todoIndex;
        })
      };
    default:
      return state;
  }
};

export default reducer;
