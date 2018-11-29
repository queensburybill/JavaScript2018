import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import { setUser, getUser } from './LoginAction';

const loginContainer = props => {
  return <Login {...props} />;
};

function mapStateToProps({ ...user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUser(user)),
    getUser: user => dispatch(getUser(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginContainer);
