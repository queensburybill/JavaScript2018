import { combineReducers } from 'redux';
import BankReducer from '../components/Bank/BankReducer';
import LoginReducer from '../components/Login/LoginReducer';
const rootReducer = combineReducers({
  BankAccount: BankReducer,
  Login: LoginReducer
});

export default rootReducer;
