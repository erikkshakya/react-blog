import {
  USER_CREATE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";
import * as api from "../api/articles-api";

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({
      type: USER_CREATE,
      payload: data,
    });
    console.log("hello", data);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: user });
  try {
    const { data } = await api.loginUser(user);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    console.log(".......",JSON.parse(data));
    localStorage.setItem("userInfo", JSON.parse(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  dispatch({ type: USER_SIGNOUT });
  document.location.href = '/signin';
};


