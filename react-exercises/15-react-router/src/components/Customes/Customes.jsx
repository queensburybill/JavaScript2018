/**
 * Since all custom categories will use this same component (men's customes, women's customes etc.)
 * you will need to get this to work dynmically. Using "examples/14-react-router/src/components/Movie/Movie.jsx" and
 * @see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf#46b8
 * change this so that it will display customes for the correct category.
 */

import React from "react";

/**
 * This is our data. The customes can be found in the "src/data/customes.js" file
 */
import customes from "../../data/customes";

function Customes(props) {
  /**
   * I am hardcoding the category here. This is the part you will need to change.
   * The category can be found somewhere in props.
   */
  console.log(props);
  const category = props.match.params.category;
  const { customes: categoryCustomes } = customes[category];

  /**
   * For display below. Capitializing the first letter.
   * @const
   * @type {string}
   */
  const categoryTitleCase = category[0].toUpperCase() + category.substring(1);

  return (
    <div>
      <h1>Customes - {categoryTitleCase}</h1>
      <div className="row">
        {/**
         * Looping through the categories customes found in "src/data/customes.js" file and display them.
         */
        categoryCustomes.map((customeInfo, index) => {
          const key = `custome-${index}`;
          return (
            <div className="col text-center" key={key}>
              <img src={customeInfo.image} alt="" className="mb-1" />
              <div>{customeInfo.name}</div>
              <div className="lead text-warning">
                $ {customeInfo.price.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customes;
