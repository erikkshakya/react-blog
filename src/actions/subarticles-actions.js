import {
  SUBARTICLES_LIST_REQUEST,
  SUBARTICLES_LIST_SUCCESS,
  SUBARTICLES_LIST_FAIL,
  SUBARTICLES_CREATE_REQUEST,
  SUBARTICLES_CREATE_SUCCESS,
  SUBARTICLES_CREATE_FAIL,
  SUBARTICLES_DETAILS_REQUEST,
  SUBARTICLES_DETAILS_SUCCESS,
  SUBARTICLES_DETAILS_FAIL,
  SUBARTICLE_UPDATE_REQUEST,
  SUBARTICLE_UPDATE_SUCCESS,
  SUBARTICLE_UPDATE_FAIL,
  SUBARTICLE_DELETE_FAIL,
  SUBARTICLE_DELETE_REQUEST,
  SUBARTICLE_DELETE_SUCCESS,
  SUBARTICLE_DELETE_RESET,
} from "../constants/subarticlesConstants";
import * as api from "../api/subarticles.api";

export const listSubArticles = () => async (dispatch) => {
  dispatch({
    type: SUBARTICLES_LIST_REQUEST,
  });
  try {
    const { data } = await api.fetchSubarticles();
    dispatch({
      type: SUBARTICLES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: SUBARTICLES_LIST_FAIL, payload: error.message });
  }
};
export const listSubArticlesDetails = (slug) => async (dispatch) => {
  dispatch({ type: SUBARTICLES_DETAILS_REQUEST, payload: slug });
  try {
    const { data } = await api.fetchSubArticlesDetails(slug);
    dispatch({ type: SUBARTICLES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBARTICLES_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const createSubArticle = (subarticle) => async (dispatch, getState) => {
  dispatch({ type: SUBARTICLES_CREATE_REQUEST });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = await api.createSubArticle(subarticle);
    dispatch({
      type: SUBARTICLES_CREATE_SUCCESS,
      payload: data.subarticle,
    });
  } catch (error) {
    dispatch({ type: SUBARTICLES_CREATE_FAIL, payload: error });
  }
};

export const updateSubArticles = (slug, subarticle) => async (
  dispatch,
  getState
) => {
  dispatch({ type: SUBARTICLE_UPDATE_REQUEST, payload: subarticle });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = await api.updateSubArticle(slug, subarticle);
    dispatch({ type: SUBARTICLE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUBARTICLE_UPDATE_FAIL, error: message });
  }
};
export const deleteSubArticles = (slug) => async (dispatch, getState) => {
  dispatch({ type: SUBARTICLE_DELETE_REQUEST, payload: slug });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = await api.deleteSubArticle(slug);
    dispatch({ type: SUBARTICLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUBARTICLE_DELETE_FAIL, payload: message });
  }
};

// export const detailsSubArticles = (slug) => async (dispatch) => {
//   const { data } = await api.fetchSubArticlesDetails(slug);
//   try {
//     dispatch({
//       type: SUBARTICLES_DETAILS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createSubArticle = (subarticle) => async (dispatch) => {
//   try {
//     const data = await api.createSubArticle(subarticle);
//     console.log("data", data);
//     dispatch({
//       type: SUBARTICLES_CREATE,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
