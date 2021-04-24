import {
  SUBARTICLES_LIST,
  SUBARTICLES_DETAILS,
  SUBARTICLES_CREATE,
} from "../constants/subarticlesConstants";
import * as api from "../api/articles-api";

export const listSubArticles = () => async (dispatch) => {
  const { data } = await api.fetchSubarticles();
  try {
    dispatch({
      type: SUBARTICLES_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const detailsSubArticles = (slug) => async (dispatch) => {
  const { data } = await api.fetchSubArticlesDetails(slug);
  try {
    dispatch({
      type: SUBARTICLES_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSubArticle = (subarticle) => async (dispatch) => {
  try {
    const data = await api.createSubArticle(subarticle);
    console.log("data", data);
    dispatch({
      type: SUBARTICLES_CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
