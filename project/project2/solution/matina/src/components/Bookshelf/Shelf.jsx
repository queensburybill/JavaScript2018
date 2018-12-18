import React from "react";
import { Link } from "react-router-dom";

import ShelfChanger from "../ShelfChanger/ShelfChanger";

function Shelf(props) {
  return (
    <div className="card">
      <div className="card-section">
        <h2 className="h3">{props.title}</h2>
        <ul>
          {props.books.map(book => {
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
                <div className="media-object-section">
                  <h3 className="h4">
                    <Link to={link}>{book.title}</Link>
                  </h3>
                  <div>
                    <ShelfChanger
                      bookId={book.id}
                      shelf={book.shelf}
                      updateSucceeded={props.updateSucceeded}
                      updateFailed={props.updateFailed}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Shelf;
