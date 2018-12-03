import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SigninContainer from "./Signin/SigninContainer.js";
import CategoryListContainer from "./CategoryList/CategoryListContainer.js";
import CategoryContainer from "./Category/CategoryContainer";
import CompleteVotingContainer from "./CompleteVoting/CompleteVotingContainer";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={CategoryListContainer} />
      <Route exact path="/signin" component={SigninContainer} />
      <Route exact path="/categories" component={CategoryListContainer} />
      <Route exact path="/complete" component={CompleteVotingContainer} />
      <Route path="/category/:id/" component={CategoryContainer} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
