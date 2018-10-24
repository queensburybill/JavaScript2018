import React, { Component } from "react";
import "./UserDirectory.css";
import axios from "axios";

const url = "https://randomuser.me/api?results=500&inc=name,email,picture";

/**
 * PART I: To be completed at the beginning of class
 *
 * Using events and state with React, get the search bar to work. The search bar should
 * search by first name, last name, and first name and last name together.
 * The search bar should be case insensitive. For a demo,
 * @see https://www.screencast.com/t/h1N9DohcF
 *
 * Hint: you might want to use string.match()
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 *
 * As an a bonus, create a separate User component and refactor the component
 * below to use the separate User component
 */

class UserDirectory extends Component {
  state = {
    users: [],
    isLoading: true,
    hasError: false
  };
  /**
   * Storing all the users separately so that when, in the search, the back button is hit,
   * it will render all the users again
   * @memberof UserDirectory
   */
  allUsers = [];
  getUsers() {
    axios
      .get(url)
      .then(response => {
        if (
          response.data &&
          response.data.results &&
          response.data.results.length > 0
        ) {
          console.log("here");
          this.allUsers = response.data.results;
          this.setState({
            users: this.allUsers,
            isLoading: false
          });
        } else throw new Error("Got a response, but no users in the response");
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  }
  componentDidMount() {
    this.getUsers();
  }
  search = userInput => {
    const input = userInput.replace(" ", "").toLowerCase();
    this.setState({
      users: this.allUsers.filter(user => {
        const name = user.name.first + user.name.last;
        return name.match(input);
      })
    });
  };
  render() {
    return (
      <div className="UserDirectory">
        <div className="Search">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="search"
            onChange={e => this.search(e.target.value)}
          />
        </div>
        <div className="UserDirectory-users">
          {this.state.hasError ? (
            <p>We are sorry, an error has occurred.</p>
          ) : null}
          {this.state.isLoading ? <p>Loading ...</p> : null}
          {this.state.users.map((user, index) => {
            const key = "user-" + index;
            const name =
              user.name.first[0].toUpperCase() +
              user.name.first.substring(1) +
              " " +
              user.name.last[0].toUpperCase() +
              user.name.last.substring(1);
            return (
              <div className="card" key={key}>
                <div className="card-section media-object">
                  <div className="thumbnail">
                    <img src={user.picture.medium} alt="" />
                  </div>
                  <div className="media-object-section align-self-middle">
                    <div>
                      <span className="h6">{name}</span>
                      <br />
                      <a href={"mailto:" + user.email}>{user.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {Array.isArray(this.state.users) &&
          this.state.users.length === 0 &&
          !this.state.isLoading &&
          !this.state.hasError ? (
            <p>No results found.</p>
          ) : null}
        </div>
      </div>
    );
  }
}

/**
 * PART II - to be completed later in class
 *
 * Update the component to use AJAX and lifecycle hooks.
 * You will need to install and import the Axios library. From the "react-exercises/13-user-directory" folder, run
 * ```
 * npm install --save axios
 * ```
 * You will be using the Random User API. Use this URL:
 * https://randomuser.me/api?results=500&inc=name,email,picture
 */

export default UserDirectory;
