/**
 *@see https://airbnb.io/enzyme/docs/api/
 *@see https://github.com/airbnb/enzyme
 * Complete the following tests down below.
 *
 *
 */
import ReactDOM from "react-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import App from "./App";

const wrapper = shallow(<App />);
const mountedWrapper = mount(<App />);

describe("Links Page", () => {
  // console.log(wrapper.debug());
  // console.log(mountedWrapper.debug());

  it("renders a welcome message", () => {
    expect(wrapper.contains(<h2>Welcome Links Center</h2>)).to.be.true;
  });
  it("it renders two buttons on the screen", () => {
    const buttons = wrapper.find("button");
    expect(buttons).to.have.lengthOf(2);
  });
  it("clicking on hide button hides the text from the viewer", () => {
    const originalLinks = mountedWrapper.find("li");
    expect(originalLinks).to.have.lengthOf(2);

    const buttons = mountedWrapper.find("button");
    const hideButton = buttons.reduce((acc, button) => {
      return button.text() === "Hide Links" ? button : acc;
    });
    hideButton.simulate("click");
    expect(mountedWrapper.find("li").isEmpty()).to.be.true;
  });
  it("clicking the hide button twice unhides the links", () => {
    const buttons = mountedWrapper.find("button");
    const hideButton = buttons.reduce((acc, button) => {
      return button.text() === "Hide Links" ? button : acc;
    });
    hideButton.simulate("click");

    const links = mountedWrapper.find("li");
    expect(links).to.have.lengthOf(2);
  });
  it("clicking on add button adds a link", () => {
    mountedWrapper.setState({ userInput: "Another link" });

    const buttons = mountedWrapper.find("button");
    const addButton = buttons.reduce((acc, button) => {
      return button.text() === "Add a Link" ? button : acc;
    });
    addButton.simulate("click");

    const links = mountedWrapper.find("li");
    expect(links).to.have.lengthOf(3);
  });
});
