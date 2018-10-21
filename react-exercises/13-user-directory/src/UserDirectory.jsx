import React, { Component } from "react";
import "./UserDirectory.css";
import users from "./users";

/**
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
    users: users
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
          />
        </div>
        <div className="UserDirectory-users">
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
        </div>
      </div>
    );
  }
}

export default UserDirectory;
