import * as types from "../../actions/types";

const initialState = {
  bankBalance: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BANK_BALANCE: {
      return { ...state, bankBalance: action.payload };
    }
    case types.DEPOSIT_MONEY: {
      /**
       * {
       *   bankBalance: 1050
       * }
       *
       * {
       *   BankAccount: {
       *     bankBalance: 1050
       *   }
       * }
       */
      return {
        ...state,
        bankBalance: parseInt(state.bankBalance) + parseInt(action.payload)
      };
    }
    case types.WITHDRAW_MONEY: {
      return {
        ...state,
        bankBalance: parseInt(state.bankBalance) - parseInt(action.payload)
      };
    }
    default:
      return state;
  }
}
