import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../../api.js";

import SearchBar from "../Widgets/SearchBar";
import ErrorMessage from "../Widgets/ErrorMessage";

class SearchBooks extends Component {
  state = {
    searchInput: "",
    books: [],
    hasError: false,
    error: null
  };
  search = searchInput => {
    search(searchInput, 20)
      .then(data => {
        if (data.books.length === 0) {
          this.setState({
            isLoading: false,
            hasError: true,
            error: "No search results found.",
            books: []
          });
        } else {
          this.setState({
            books: data.books,
            hasError: false
          });
        }
      })
      .catch(() => {
        this.setState({
          hasError: true,
          error: null,
          books: []
        });
      });
  };
  set = searchInput => {
    if (searchInput) {
      this.setState({
        searchInput
      });
      this.search(searchInput);
    } else {
      this.setState({
        searchInput,
        books: [],
        hasError: false
      });
    }
  };
  render() {
    return (
      <div>
        <h1 className="show-for-sr">Search Results</h1>
        <SearchBar
          value={this.state.searchInput}
          setSearchInput={e => this.set(e.target.value)}
        />
        {this.state.hasError && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <ul>
          {this.state.books.map(book => {
            const key = `book-${book.id}`;
            const link = `/book/${book.id}`;
            return (
              <li className="media-object" key={key}>
                <div className="media-object-section">
                  <div className="thumbnail">
                    {book.imageLinks && (
                      <Link to={link}>
                        <img
                          src={book.imageLinks.smallThumbnail}
                          alt=""
                          width="100"
                          height="144"
                        />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="media-object-section middle align-self-middle">
                  <div className="h5">
                    <Link to={link}>{book.title}</Link>
                  </div>
                  {book.authors && (
                    <ul className="no-bullet">
                      {book.authors.map((author, index) => {
                        const key = `author-${index}`;
                        return <li key={key}>{author}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchBooks;
