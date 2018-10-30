/**
 * Since all costume categories will use this same component (men's costumes, women's costumes etc.)
 * you will need to get this to work dynmically. Using "examples/14-react-router/src/components/Movie/Movie.jsx" and
 * @see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf#46b8
 * change this so that it will display costumes for the correct category.
 */

import React from "react";

/**
 * This is our data. The costumes can be found in the "src/data/costumes.js" file
 */
import costumes from "../../data/costumes";

function Costumes(props) {
  /**
   * I am hardcoding the category here. This is the part you will need to change.
   * The category can be found somewhere in props.
   */
  const category = props.match.params.category;
  const { costumes: categoryCostumes } = costumes[category];

  /**
   * For display below. Capitializing the first letter.
   * @const
   * @type {string}
   */
  const categoryTitleCase = category[0].toUpperCase() + category.substring(1);

  return (
    <div>
      <h1>Costumes - {categoryTitleCase}</h1>
      <div className="row">
        {/**
         * Looping through the categories costumes found in "src/data/costumes.js" file and display them.
         */
        categoryCostumes.map((costumeInfo, index) => {
          const key = `costume-${index}`;
          return (
            <div className="col text-center" key={key}>
              <img src={costumeInfo.image} alt="" className="mb-1" />
              <div>{costumeInfo.name}</div>
              <div className="lead text-warning">
                $ {costumeInfo.price.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Costumes;
