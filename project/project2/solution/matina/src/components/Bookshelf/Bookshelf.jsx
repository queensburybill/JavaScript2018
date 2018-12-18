import React, { Component } from "react";
import { getBookSelf } from "../../api.js";

import Shelf from "./Shelf";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Bookshelf extends Component {
  state = {
    isLoading: true,
    hasError: false,
    books: []
  };
  getBookSelf = () => {
    getBookSelf()
      .then(data => {
        this.setState({
          isLoading: false,
          books: data.books
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  };
  componentDidMount() {
    this.getBookSelf();
  }
  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.hasError) return <ErrorMessage />;

    return (
      <div>
        <h1 className="show-for-sr">My Bookshelf</h1>
        <Shelf
          title="Want to Read"
          shelf="wantToRead"
          books={this.state.books.wantToRead}
          updateSucceeded={this.getBookSelf}
        />
        <Shelf
          title="Currently Reading"
          shelf="currentlyReading"
          books={this.state.books.currentlyReading}
          updateSucceeded={this.getBookSelf}
        />
        <Shelf
          title="Read"
          shelf="read"
          books={this.state.books.read}
          updateSucceeded={this.getBookSelf}
        />
      </div>
    );
  }
}

export default Bookshelf;
