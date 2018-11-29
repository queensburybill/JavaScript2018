import * as types from '../../actions/types';

export function setUser(User) {
  return {
    type: types.SET_USER,
    User: User
  };
}

export function getUser() {
  return {
    type: types.GET_USER
  };
}
