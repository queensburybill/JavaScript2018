import React, { Component } from "react";
import "./JewelGame.css";
import jewelBlue from "./jewel-blue.svg";
import jewelGreen from "./jewel-green.svg";

/**
 * @constant {array} an array of nested object, with each object representing a single jewel
 * @see https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
 */
const jewels = [...Array(35).keys()].map(num => {
  return {
    image: num % 2 === 0 ? jewelBlue : jewelGreen,
    isVisible: true
  };
});

function Jewel(props) {
  return (
    <img
      src={props.image}
      className="Jewel"
      alt=""
      width="128"
      height="128"
      tabIndex="-1"
      onClick={props.onClick}
    />
  );
}

function Counter(props) {
  return (
    <div className="Counter" id="counter">
      {props.count || 0}
    </div>
  );
}

class JewelGame extends Component {
  constructor() {
    super();
    this.state = { count: 0, jewels };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    let newJewels = this.state.jewels;
    newJewels[index].isVisible = false;
    this.setState({
      count: this.state.count + 1,
      jewels: newJewels
    });
  }
  render() {
    return (
      <main className="JewelGame">
        <Counter count={this.state.count} />
        {this.state.jewels.map((jewel, index) => {
          const key = "jewel-" + index;
          return jewel.isVisible ? (
            <Jewel
              image={jewel.image}
              onClick={this.handleClick.bind(null, index)}
              key={key}
            />
          ) : null;
        })}
      </main>
    );
  }
}

export default JewelGame;
