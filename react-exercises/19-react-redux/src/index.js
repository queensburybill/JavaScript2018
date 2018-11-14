/**
 * Set this file up to setup "redux-react"
 * @see https://redux.js.org/basics/usagewithreact#passing-the-store
 *
 * You will need to import an extra package
 */

import React from "react";
import{ render } from "react-dom";
import { Provider } from 'react-redux'
import store from "./store";
import App from "./components/App";

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)
