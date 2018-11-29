import React from "react";
import ReactDOM from "react-dom";
import App from "../../App.js";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import DisplayList from "../displayList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);
const displayListWrapper = mount(<DisplayList items={["Test"]} />);

describe("<App/>", () => {
  it("Setting States returns a list of items", () => {
    wrapper.setState({
      items: ["Hello"]
    });
    expect(wrapper.find("li")).to.have.lengthOf(1);
  });
  it("clicking on the button adds an item to the list", () => {
    const input = wrapper.find("input");
    wrapper.setState({
      items: ["Hello", "Test", "Test2"]
    });
    input.simulate("change", { target: { value: "Hello" } });
    input.simulate("click");
    expect(
      wrapper
        .find("li")
        .at(0)
        .text()
    ).to.equal("Hello");
    expect(wrapper.find("li")).to.have.lengthOf(3);
  });
  it("clicking on an item deletes that item", () => {
    console.log(wrapper.debug());
    const itemToBeDeleted = wrapper.find("li").at(0);
    itemToBeDeleted.simulate("click");
    expect(wrapper.find("li")).to.have.lengthOf(2);
  });
});

describe("<DisplayList/>", () => {
  it.only("renders li items based off of props", () => {
    expect(displayListWrapper.find("li").text()).to.equal("Test");
  });
});
