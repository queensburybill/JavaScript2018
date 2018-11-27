import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CategoryListContainer from "./CategoryList/CategoryListContainer.js";
import CategoryContainer from "./Category/CategoryContainer";
import CompleteVoting from "./CompleteVoting/CompleteVoting";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={CategoryListContainer} />
      <Route exact path="/categories" component={CategoryListContainer} />
      <Route exact path="/complete" component={CompleteVoting} />
      <Route path="/category/:id/" component={CategoryContainer} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
