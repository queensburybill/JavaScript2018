import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Bookshelf from "./Bookshelf/Bookshelf";
import Book from "./Book/Book";
import SearchBooks from "./SearchBooks/SearchBooks";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="grid-container">
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/search" component={SearchBooks} />
            <Route exact path="/bookshelf" component={Bookshelf} />
            <Route path="/book/:id" component={Book} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
