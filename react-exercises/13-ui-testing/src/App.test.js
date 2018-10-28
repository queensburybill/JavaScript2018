/**
 * Modifying this file so that is uses Enzyme
 * @see https://facebook.github.io/create-react-app/docs/running-tests#src-setuptestsjs
 *
 * So this:
 * import React from "react";
 * import ReactDOM from "react-dom"; // Removing this
 * import App from "./App";
 *
 * Become this:
 */

import React from "react";
import { shallow, render } from "enzyme"; // Importing enzyme
import { expect } from "chai";
import App from "./App";

/**
 * And this:
 * it("renders without crashing", () => {
 *   const div = document.createElement("div");
 *   ReactDOM.render(<App />, div);
 *   ReactDOM.unmountComponentAtNode(div);
 * });
 *
 * Becomes this:
 */

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it.only("will not load the child <Link> component without static rendering", () => {
  // If you uncomment this, this will fail
  // const wrapper = shallow(<App />);
  // expect(wrapper.find("li")).to.have.lengthOf(2);

  // Using static rendering instead
  const wrapper = render(<App />);
  expect(wrapper.find("li")).to.have.lengthOf(2);
});
