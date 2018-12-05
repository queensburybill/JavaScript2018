import { SIGNIN } from "../constants/actionTypes";

import { signinRequest } from "../services/api";

import history from "../history";

const signAction = (memberId, pinNumber) => {
  return {
    type: SIGNIN,
    payload: signinRequest(memberId, pinNumber)
  };
};

export const signin = (memberId, pinNumber) => {
  return dispatch => {
    dispatch(signAction(memberId, pinNumber)).then(data => {
      if (data.value.token) {
        history.push("/");
      }
    });
  };
};
