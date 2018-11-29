import React from "react";
import Retro from "../Retro/Retro";

function RetroBoardCategory(props) {
  return (
    <div className={`RetroBoardCategory RetroBoardCategory-${props.category}`}>
      <h2>{props.title}</h2>
      <button
        type="button"
        className="button button-default"
        onClick={() => props.new(props.category)}
      >
        <span className="sr-only">Add to "{props.title}"</span>+
      </button>
      {props.retros.map(retro => {
        const { id, text } = retro;
        const key = "retro-" + id;
        return (
          <Retro
            id={id}
            text={text}
            move={props.move}
            insert={props.insert}
            delete={props.delete}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default RetroBoardCategory;
