import * as types from '../../actions/types';

const GET_BANK_BALANCE = 10020;
export function getBankBalance() {
  return {
    type: types.GET_BANK_BALANCE,
    payload: GET_BANK_BALANCE
  };
}

export function depositMoney(amountToBeDeposited) {
  console.log(amountToBeDeposited);

  return {
    type: types.DEPOSIT_MONEY,
    payload: amountToBeDeposited
  };
}

export function withDrawMoney(withdrawal) {
  return {
    type: types.WITHDRAW_MONEY,
    payload: withdrawal
  };
}
