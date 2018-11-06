import * as type from "./constants/actionTypes";

const reducer = (
  state = {
    count: 0,
    todos: [],
    colors: {
      1: "red",
      2: "orange",
      3: "yellow",
      4: "green",
      5: "blue",
      6: "purple"
    }
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
    /**
     * Complete this
     */
    case type.SELECT_COLOR:
      return {
        ...state,
        selectedColor: state.colors[action.colorId]
      };
    case type.ADD_COLOR:
    /**
     * Add a color and write a unit test for the color
     */
    case type.ADD_COLOR:
    /**
     * Delete a color and write a unit test for the color
     */
    default:
      return state;
  }
};

export default reducer;
