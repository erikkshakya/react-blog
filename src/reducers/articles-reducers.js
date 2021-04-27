import {
  ARTICLES_DETAILS,
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
  ARTICLE_UPDATE_RESET,
  ARTICLE_DELETE_RESET,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAIL,
} from "../constants/articlesConstants";

export const articlesListReducer = (
  state = { loading: true, articles: [] },
  action
) => {
  switch (action.type) {
    case ARTICLES_LIST_REQUEST:
      return { loading: true };
    case ARTICLES_LIST_SUCCESS:
      return { loading: false, articles: action.payload };
    case ARTICLES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articlesDetailsReducer = (
  state = [{ loading: true, article: {} }],
  action
) => {
  switch (action.type) {
    case ARTICLE_DETAILS_REQUEST:
      return { loading: true };
    case ARTICLE_DETAILS_SUCCESS:
      return { loading: false, article: action.payload };
    case ARTICLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articlesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    // case ARTICLES_DETAILS:
    //   return action.payload;
    case ARTICLES_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
// export const articlesCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ARTICLES_CREATE_REQUEST:
//       return { loading: true };
//     case PRODUCT_CREATE_SUCCESS:
//       return { loading: false, success: true, product: action.payload };
//     case PRODUCT_CREATE_FAIL:
//       return { loading: false, error: action.payload };
//     case PRODUCT_CREATE_RESET:
//       return {};
//     default:
//       return state;
//   }
// };

export const articleUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_UPDATE_REQUEST:
      return { loading: true };
    case ARTICLE_UPDATE_SUCCESS:
      return { loading: false, success: true, article: action.payload };
    case ARTICLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ARTICLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const articleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_DELETE_REQUEST:
      return { loading: true };
    case ARTICLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ARTICLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ARTICLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
