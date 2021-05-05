import {
  ARTICLES_LIST_FAIL,
  ARTICLES_LIST_REQUEST,
  ARTICLES_LIST_SUCCESS,
  ARTICLES_CREATE,
  ARTICLE_UPDATE_REQUEST,
  ARTICLE_UPDATE_SUCCESS,
  ARTICLE_UPDATE_FAIL,
  ARTICLE_DELETE_FAIL,
  ARTICLE_DELETE_REQUEST,
  ARTICLE_DELETE_SUCCESS,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAIL,
} from "../constants/articlesConstants";
import * as api from "../api/articles-api";

export const listArticles = () => async (dispatch) => {
  dispatch({
    type: ARTICLES_LIST_REQUEST,
  });
  try {
    const { data } = await api.fetchArticles();
    dispatch({
      type: ARTICLES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ARTICLES_LIST_FAIL, payload: error.message });
  }
};

export const listArticlesDetails = (slug) => async (dispatch) => {
  dispatch({ type: ARTICLE_DETAILS_REQUEST, payload: slug });
  try {
    const { data } = await api.fetchArticlesDetails(slug);
    dispatch({ type: ARTICLE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ARTICLE_DETAILS_FAIL,
      payload:
        error
    });
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    const data = await api.createArticle(article);
    console.log("data", data);
    dispatch({
      type: ARTICLES_CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateArticles = (slug, article) => async (dispatch, getState) => {
  dispatch({ type: ARTICLE_UPDATE_REQUEST, payload: article });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = await api.updateArticles(slug, article);
    dispatch({ type: ARTICLE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ARTICLE_UPDATE_FAIL, error: message });
  }
};
export const deleteArticle = (slug) => async (dispatch, getState) => {
  dispatch({ type: ARTICLE_DELETE_REQUEST, payload: slug });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  try {
    const { data } = await api.deleteArticle(slug);
    dispatch({ type: ARTICLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ARTICLE_DELETE_FAIL, payload: message });
  }
};
