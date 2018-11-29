import React, { Component } from 'react';
import Costumes from './components/Costumes/Costumes';
import Checkout from './components/Checkout/Checkout';
import './App.css';

class App extends Component {
  state = {
    Zombie: 0,
    Rick: 0
  };

  IncrementRick = () => {
    this.setState({ Rick: this.state.Rick + 1 });
  };
  DecrementRick = () => {
    this.setState({ Rick: this.state.Rick - 1 });
  };

  IncrementZombie = () => {
    this.setState({ Zombie: this.state.Zombie + 1 });
  };
  DecrementZombie = () => {
    this.setState({ Zombie: this.state.Zombie - 1 });
  };
  render() {
    const { Zombie, Rick } = this.state;
    return (
      <div className="App">
        <Costumes
          IncrementRick={this.IncrementRick}
          DecrementRick={this.DecrementRick}
          IncrementZombie={this.IncrementZombie}
          DecrementZombie={this.DecrementZombie}
          Zombie={this.state.Zombie}
          Rick={this.state.Rick}
        />
        <Checkout orders={['Zombie', 'Rick']} total={Zombie + Rick} />
      </div>
    );
  }
}

export default App;
