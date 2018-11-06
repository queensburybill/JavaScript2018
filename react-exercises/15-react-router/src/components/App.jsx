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
<<<<<<< HEAD
import CostumeCategories from "./CostumeCategories/CostumeCategories";
import Costumes from "./Costumes/Costumes";
=======
import CustomeCategories from "./CustomeCategories/CustomeCategories";
import Customes from "./Customes/Customes";
>>>>>>> b25a044af835b5dcd78c6655095b2e6942e0ab13

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
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={CostumeCategories} />
        <Route exact path="/costume-categories" component={CostumeCategories} />
        <Route exact path="/costumes/:category" component={Costumes} />
=======
      {/* Both components should NOT display on the page at once. */}
      <Switch>
        <Route exact path="/" component={CustomeCategories} />
        <Route exact path="/customes" component={CustomeCategories} />
        <Route path="/customes/:category" component={Customes} />
>>>>>>> b25a044af835b5dcd78c6655095b2e6942e0ab13
      </Switch>
    </div>
  );
}

export default App;
