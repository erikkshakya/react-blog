import {
  USER_CREATE,
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const UserReducers = (user = [], action) => {
  switch (action.type) {
    case USER_CREATE:
      return [...user, ...action.payload];
    case USER_LOGIN:
      return [...user, ...action.payload];
    default:
      return user;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
