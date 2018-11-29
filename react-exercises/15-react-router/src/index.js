/**
 * You will need to wrap React Router around your app
 * Setup this page so that it is the same as "examples/14-react-router/src/index.js"
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
