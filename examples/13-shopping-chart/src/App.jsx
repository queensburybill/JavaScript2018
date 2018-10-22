import React, { Component } from "react";
import PropTypes from "prop-types";

class CharacterPoll extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCharacter: null }; // Setting initial state
  }
  handleClick(index, e) {
    // Passing index as a parameter
    e.preventDefault();
    if (typeof this.state.selectedCharacter !== "number")
      this.setState({ selectedCharacter: index }); // Updating state
  }
  render() {
    return (
      <div className="container">
        <h3>Vote for Your Favorite Character</h3>
        <div className="card-group">
          {characters.map((character, index) => {
            return (
              <div
                key={"profile-" + index}
                className={"card".concat(
                  this.state.selectedCharacter === index
                    ? " bg-primary text-white" // Changing the background if selected
                    : ""
                )}
              >
                <div className="card-body">
                  <h3>{character.name}</h3>
                  <p>{character.bio}</p>
                  <a
                    href="#"
                    className="btn btn-primary border-white mr-2"
                    onClick={
                      this.handleClick.bind(
                        this,
                        index
                      ) /* Binding reference to character here */
                    }
                  >
                    Vote
                  </a>
                  {this.state.selectedCharacter === index && (
                    // Displaying message if selected
                    <span>&#x02713; Thanks for your vote!</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const characters = [
  {
    name: "Han Solo",
    bio:
      "A smuggler who became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire during the Galactic Civil War."
  },
  {
    name: "Rey",
    bio:
      "Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict."
  }
];

function App() {
  return <CharacterPoll characters={characters} />;
}

export default App;
