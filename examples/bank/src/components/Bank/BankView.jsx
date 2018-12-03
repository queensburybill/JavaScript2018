import React, { Component } from 'react';

import './BankView.css';
class BankView extends Component {
  state = {
    depositMoney: '',
    withDrawMoney: ''
  };
  componentDidMount() {
    this.props.getBankBalance();
  }
  //Mention not needing the double arrow function.
  depositMoney() {
    this.props.depositMoney(this.state.depositMoney);
    this.resetInput();
  }

  withDrawMoney() {
    this.props.withDrawMoney(this.state.withDrawMoney);
    this.resetInput();
  }

  resetInput = () => {
    this.setState({
      depositMoney: '',
      withDrawMoney: ''
    });
  };

  render() {

    return (
      <div className="login-page">
        <div className="form">
          <span className="bank-balance">{`Welcome: ${this.props.User}`}</span>
          <br />
          <span className="bank-balance">{`Your Account Balance:$${
            this.props.BankAccount.bankBalance
          }`}</span>
        </div>
        <div className="form">
          <div className="login-form">
            <input
              type="number"
              onChange={e => {
                this.setState({ depositMoney: e.target.value });
              }}
              placeholder="Enter The Amount To Deposit"
              value={this.state.depositMoney}
            />
            <input
              type="number"
              onChange={e => this.setState({ withDrawMoney: e.target.value })}
              placeholder="Enter The Amount To WithDraw"
              value={this.state.withDrawMoney}
            />
            <div className="button-container">
              <button onClick={() => this.depositMoney()}>Deposit Money</button>
              <br />
            </div>
            <button onClick={() => this.withDrawMoney()}>
              {' '}
              Withdraw Money
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BankView;
