/**
 * Replace <a> tags with React Router's <Link> component. This will import { link } from "fs";
stop the page from refreshing
 * when the user will click on the link. You will need to import something from React Router.
 *
 * You can use the file "examples/14-react-router/src/components/NowPlaying/NowPlaying.jsx" as an example
 */

import React from "react";

import { Link } from "react-router-dom";
import customes from "../../data/customes";

function CustomeCategories() {
  return (
    <div className="mt-3">
      <h1>Custome Categories</h1>
      <div className="row mt-5">
        {Object.entries(customes).map(([category, categoryInfo]) => {
          const key = `category-${category}`;
          const link = `/customes/${category}`;
          return (
            <div className="col text-center" key={key}>
              <Link to={link}>
                <img src={categoryInfo.image} alt="" />
              </Link>
              <h2 className="lead">
                <Link to={link}>{category.toUpperCase()}</Link>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomeCategories;
