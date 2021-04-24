import {
  articlesListReducer,
  articleUpdateReducer,
  articleDeleteReducer,
  articlesDetailsReducer,
  articlesCreateReducer,
} from "./articles-reducers";
import { combineReducers } from "redux";
import { subarticlesListReducer } from "./subarticles-reducers";
import { UserReducers, userSigninReducer } from "./userReducers";

export default combineReducers({
  articlesList: articlesListReducer,
  articleUpdate: articleUpdateReducer,
  articleDetails: articlesDetailsReducer,
  articleDelete: articleDeleteReducer,
  subarticlesList: subarticlesListReducer,
  userList: UserReducers,
  userLogin: userSigninReducer,
  articlesCreate: articlesCreateReducer,
});
