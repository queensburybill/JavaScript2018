import React, { Component } from 'react';
import './Forms.css'

class Forms extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e, ["name", "email", "message"])}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={e => this.props.onChange(e, "name")}
              message={this.props.message}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={e => this.props.onChange(e, "email")}
              message={this.props.message}
            />
          </div>
          <div>
            <label htmlFor="name">Message:</label>
            <textarea 
              id="message"
              type="text"
              onChange={e => this.props.onChange(e, "message")}
              message={this.props.message}
            />
          </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
