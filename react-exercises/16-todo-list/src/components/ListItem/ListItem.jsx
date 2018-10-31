import React from "react";

/**
 * Hint: you will have to pass down an event and some way of identifying the text to the
 * ListItem component.
 */
function ListItem(props) {
  return (
    <li className="list-group-item">
      {props.children}
      <button
        type="button"
        className="btn btn-link float-right"
        aria-label="Delete"
      >
        x
      </button>
    </li>
  );
}

export default ListItem;
