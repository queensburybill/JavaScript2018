import React from "react";

function Counter(props) {
  return (
    <div className="d-inline-flex flex-row align-items-center">
      <h1 className="p-2 h3">Count</h1>
      <div className="p-2  lead">{props.count || 0}</div>
      <div className="p-2">
        <button
          type="button"
          className="btn btn-primary btn-sm mr-1"
          onClick={props.decrement}
          aria-label="Decrement"
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={props.increment}
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
