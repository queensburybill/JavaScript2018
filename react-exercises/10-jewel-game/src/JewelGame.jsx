/**
 * You will remake the addEventListener assignment (found in exercises/07-events-jewel)
 * into a React app. When the user clicks on a jewel, two things should happen:
 * 1.) The number in the counter box on the top right should increase by 1
 * 2.) The jewel should be removed from the page
 *
 * With this assignment, you will use a React class, state, and event handler(s).
 * 
 * Here is the static HTML that your React app should render:
<main class="JewelGame">
    <div class="Counter">0</div>
    <img src="jewel-blue.svg" class="Jewel" alt="" width="128" height="128" tabindex="-1" role="button">
    <img src="jewel-green.svg" class="Jewel" alt="" width="128" height="128" tabindex="-1" role="button">
    <!-- ... More images, that alternate between green and blue -->
</main>
 *
 * Hint: I suggest you look at these slides
 * @see https://slides.com/jamaltaylor/intro-to-react#/
 * - Looping Through Arrays in JSX
 * - Creating Components with the React Component Class
 * - Setting Initial State
 * - Setting State with Events (passing arguments to event handlers)
 * - Conditional Rendering
 */

import React, { Component } from "react";
import "./JewelGame.css";
import jewelBlue from "./jewel-blue.svg";
import jewelGreen from "./jewel-green.svg";

/**
 * @constant {array} an array of nested object, with each object representing a single jewel
 * @see https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
 * Hint: one approach is to set this as initial state
 * YOU CAN ALTER THIS to take any shape that you want
 */
const jewels = [...Array(35).keys()].map(num => {
  return {
    image: num % 2 === 0 ? jewelBlue : jewelGreen,
    isVisible: true
  };
});

// Hint: you can pass down more properties to Jewel
function Jewel(props) {
  return (
    <img
      src={props.image}
      className="Jewel"
      alt=""
      width="128"
      height="128"
      tabIndex="-1"
      role="button"
    />
  );
}

function Counter(props) {
  return <div className="Counter">{props.count || 0}</div>;
}

// Convert this to a React Component Class
function JewelGame() {
  return (
    <main className="JewelGame">
      <Counter />
      {jewels.map((jewel, index) => {
        const key = "jewel-" + index;
        return <Jewel image={jewel.image} key={key} />;
      })}
    </main>
  );
}

export default JewelGame;
