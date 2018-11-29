import React, { Component } from 'react';
import Rick from '../../images/rick.jpeg';
import Zombie from '../../images/zombie.jpg';

import './Costumes.css';
class Costumes extends Component {
  render() {
    return (
      <div className="container">
        <h2>Zombie: {this.props.Zombie}</h2>
        <h2>Rick: {this.props.Rick}</h2>
        <div className="costume-container">
          <img src={Rick} style={{ width: '100px', height: '100px' }} />
          <div className="button">
            <button onClick={() => this.props.IncrementRick()}>Add+</button>
            <button onClick={() => this.props.DecrementRick()}>Remove</button>
          </div>
          <img src={Zombie} style={{ width: '100px', height: '100px' }} />
          <div className="button">
            <button onClick={() => this.props.IncrementZombie()}>Add+</button>
            <button onClick={() => this.props.DecrementZombie()}>Remove</button>
          </div>
          <button>Order Complete</button>
        </div>
      </div>
    );
  }
}

export default Costumes;
