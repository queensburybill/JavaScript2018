import React, { Component } from "react";
import "./Signin.css";
import logo from "../52-CMA-Awards-Logo.jpg";

import ErrorMessage from "../Widgets/ErrorMessage";

class Signin extends Component {
  state = {
    memberId: "",
    pinNumber: ""
  };
  signin = e => {
    e.preventDefault();
    this.props.signin(this.state.memberId, this.state.pinNumber);
  };
  render() {
    return (
      <div className="Signin container mt-5 text-center">
        <form className="Signin card" onSubmit={this.signin}>
          <header className="card-body">
            <img src={logo} alt="52nd CMA Awards" width="250" height="167" />
          </header>
          <main className="card-body">
            <p>Signin below to vote</p>
            <div className="form-group">
              {/**
               * @see https://getbootstrap.com/docs/4.1/components/forms/#server-side
               */}
              {this.props.isSigninInvalid && (
                <div className="invalid-feedback mb-1">
                  Your Member ID or PIN Number does not match what we have in
                  our records
                </div>
              )}
              <input
                type="text"
                className={
                  this.props.isSigninInvalid
                    ? "form-control is-invalid"
                    : "form-control"
                }
                placeholder="Member ID"
                aria-label="Member ID"
                value={this.state.memberId}
                onChange={e => this.setState({ memberId: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className={
                  this.props.isSigninInvalid
                    ? "form-control is-invalid"
                    : "form-control"
                }
                placeholder="PIN Number"
                aria-label="PIN Number"
                value={this.state.pinNumber}
                onChange={e => this.setState({ pinNumber: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-2"
              disabled={this.props.isLoading === true}
            >
              {this.props.isLoading ? "LOADING ..." : "SIGNIN"}
            </button>
            {this.props.hasError && (
              <ErrorMessage>
                Oops! The CMAs are down. Our engineers are aware of the problem
                and are hard at work trying to fix it. Please come back later.
              </ErrorMessage>
            )}
          </main>
        </form>
      </div>
    );
  }
}

export default Signin;
