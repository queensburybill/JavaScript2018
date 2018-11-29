/**
 * Using the file in "examples/14-react-router/src/components/App.jsx" as an example,
 * setup your routes in this file
 * You can also use this as a resource:
 * @see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf#215c
 *
 * First, you will need to import the packages you need from React Router
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import CustomeCategories from "./CustomeCategories/CustomeCategories";
import Customes from "./Customes/Customes";

function App() {
  /**
   * Next, you will need to setup your routes here
   *
   * - "/" should map to "CustomeCategories"
   * - "/customes" should map to "CustomeCategories"
   *
   * - "/customes/women" should map to "Customes"
   * - "/customes/men" should map to "Customes"
   * - "/customes/girls" should map to "Customes"
   * - "/customes/boys" should map to "Customes"
   */
  return (
    <div className="container">
      {/* Both components should NOT display on the page at once. */}
      <Switch>
        <Route exact path="/" component={CustomeCategories} />
        <Route exact path="/customes" component={CustomeCategories} />
        <Route path="/customes/:category" component={Customes} />
      </Switch>
    </div>
  );
}

export default App;
