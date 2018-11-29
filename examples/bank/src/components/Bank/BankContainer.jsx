import React from 'react';
import { connect } from 'react-redux';
import BankView from './BankView';
import { Dispatch } from 'redux';
import { getBankBalance, depositMoney, withDrawMoney } from './BankActions';

const BankContainer = props => {
  return <BankView {...props} />;
};

function mapStateToProps(state) {
  console.log(state.Login);
  return {
    User: state.Login.user,
    BankAccount: state.BankAccount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBankBalance: () => dispatch(getBankBalance()),
    depositMoney: deposit => dispatch(depositMoney(deposit)),
    withDrawMoney: withDrawal => dispatch(withDrawMoney(withDrawal))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankContainer);
