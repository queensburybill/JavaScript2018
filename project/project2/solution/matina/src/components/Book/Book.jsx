import React, { Component } from "react";
import { get } from "../../api.js";

import ShelfChanger from "../ShelfChanger/ShelfChanger";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Book extends Component {
  state = {
    isLoading: true,
    hasError: false
  };
  get = id => {
    get(id)
      .then(({ book }) => {
        this.setState({
          isLoading: false,
          id: book.id,
          title: book.title,
          subtitle: book.subtitle,
          image: book.imageLinks ? book.imageLinks.thumbnail : null,
          previewLink: book.previewLink || null,
          authors: book.authors,
          description: book.description,
          publisher: book.publisher,
          publishedDate: book.publishedDate.substring(0, 4),
          shelf: book.shelf
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.get(id);
    else
      this.setState({
        hasError: true
      });
  }
  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.hasError)
      return <ErrorMessage>Book not found.</ErrorMessage>;

    return (
      <div>
        <h1 className="title">
          {this.state.title}
          {this.state.subtitle && <small>&nbsp; {this.state.subtitle}</small>}
        </h1>
        <div className="media-object">
          <div className="media-object-section">
            <div className="thumbnail">
              <a
                href={this.state.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.image && <img src={this.state.image} alt="" />}
              </a>
            </div>
          </div>
          <div className="media-object-section">
            {this.state.authors && (
              <div>
                <div>
                  <strong>Authors:</strong>
                </div>
                <ul className="no-bullet">
                  {this.state.authors.map((author, index) => {
                    const key = `author-${index}`;
                    return <li key={key}>{author}</li>;
                  })}
                </ul>
              </div>
            )}
            {this.state.description && <p>{this.state.description}</p>}
            {this.state.publisher && (
              <p>
                <strong>Publisher</strong> {this.state.publisher}
              </p>
            )}
            {this.state.publishedDate && (
              <p>
                <strong>Published Date</strong> {this.state.publishedDate}
              </p>
            )}
            <ShelfChanger bookId={this.state.id} shelf={this.state.shelf} />
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
