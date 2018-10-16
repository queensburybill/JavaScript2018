import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <textarea 
            type="text"
            onChange={this.props.onChange}
            value={this.props.value}
          />
          <button 
            type="submit"
            onSubmit={this.props.onSubmit}
          >Click Me</button>
        </form>
      </div>
    );
  }
}

export default Forms;
