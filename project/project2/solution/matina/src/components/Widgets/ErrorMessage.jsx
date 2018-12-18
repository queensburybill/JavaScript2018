import React from "react";

function ErrorMessage(props) {
  return <p>{props.children || "Oops! An unexpected error occurred."}</p>;
}

export default ErrorMessage;
