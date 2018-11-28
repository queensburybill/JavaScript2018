import { SIGNIN } from "../constants/actionTypes";

import { signinRequest } from "../services/api";

export const signin = (memberId, pinNumber) => {
  return {
    type: SIGNIN,
    payload: signinRequest(memberId, pinNumber)
  };
};
