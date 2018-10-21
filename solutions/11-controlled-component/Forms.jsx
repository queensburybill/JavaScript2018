import React, { Component } from "react";

class Forms extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <textarea
            type="text"
            onChange={e => this.props.onChange(e.target.value)}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    );
  }
}

export default Forms;
