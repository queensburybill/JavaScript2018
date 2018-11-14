import { connect } from "react-redux";
import Todo from "./Todo";
import { addTodo, deleteTodo } from "../../actions";

function mapPropsToState({ todos }) {
  return {
    todos
  };
}

function mapDispatchToState(dispatch) {
  return {
    addTodo: userInput => dispatch(addTodo(userInput)),
    deleteTodo: todoIndex => dispatch(deleteTodo(todoIndex))
  };
}

export default connect(
  mapPropsToState,
  mapDispatchToState
)(Todo);
