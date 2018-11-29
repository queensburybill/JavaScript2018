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
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          return index !== action.todoIndex;
        })
      };
    case type.SELECT_COLOR:
      return {
        ...state,
        selectedColor: state.colors[action.colorId]
      };
    case type.ADD_COLOR:
      const ids = Object.keys(state.colors).sort();
      const lastId = ids[ids.length - 1];
      const newId = String(parseInt(lastId) + 1);
      let newColors = { ...state.colors };
      newColors[newId] = action.colorName;
      return {
        ...state,
        colors: newColors
      };
    case type.DELETE_COLOR:
      let colors = { ...state.colors };
      delete colors[action.colorId];
      return {
        ...state,
        colors
      };
    default:
      return state;
  }
};

export default reducer;
