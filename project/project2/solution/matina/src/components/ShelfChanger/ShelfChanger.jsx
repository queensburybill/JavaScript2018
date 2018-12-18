import React from "react";
import "./ShelfChanger.css";
import { updateShelf } from "../../api.js";

import shelves from "../../constants/shelves";

function ShelfChanger(props) {
  const update = shelf => {
    updateShelf(props.bookId, shelf)
      .then(
        props.updateSucceeded ? props.updateSucceeded.bind(null, shelf) : null
      )
      .catch(props.updateFailed);
  };
  return (
    <label className="ShelfChanger">
      Change Shelf:
      <select defaultValue={props.shelf} onChange={e => update(e.target.value)}>
        {Object.entries(shelves).map(([shelf, text]) => {
          return (
            <option value={shelf} key={shelf}>
              {text}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default ShelfChanger;
