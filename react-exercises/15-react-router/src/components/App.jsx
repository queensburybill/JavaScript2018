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
import CostumeCategories from "./CostumeCategories/CostumeCategories";
import Costumes from "./Costumes/Costumes";

function App() {
  /**
   * Next, you will need to setup your routes here
   *
   * - "/" should map to "CostumeCategories"
   * - "/costumes" should map to "CostumeCategories"
   *
   * - "/costume/women" should map to "Customes"
   * - "/costume/men" should map to "Customes"
   * - "/costume/girls" should map to "Customes"
   * - "/costume/boys" should map to "Customes"
   */
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={CostumeCategories} />
        <Route exact path="/costume-categories" component={CostumeCategories} />
        <Route exact path="/costumes/:category" component={Costumes} />
      </Switch>
    </div>
  );
}

export default App;
