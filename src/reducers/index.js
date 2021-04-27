import {
  articlesListReducer,
  articleUpdateReducer,
  articleDeleteReducer,
  articlesDetailsReducer,
  articlesCreateReducer,
} from "./articles-reducers";
import { combineReducers } from "redux";
import {
  subarticleDeleteReducer,
  subarticlesCreateReducer,
  subarticlesDetailsReducer,
  subarticlesListReducer,
  subarticleUpdateReducer,
} from "./subarticles-reducers";
import { UserReducers, userSigninReducer } from "./userReducers";

export default combineReducers({
  articlesList: articlesListReducer,
  articleUpdate: articleUpdateReducer,
  articleDetails: articlesDetailsReducer,
  articleDelete: articleDeleteReducer,
  subarticlesList: subarticlesListReducer,
  subarticlesCreate: subarticlesCreateReducer,
  subarticlesDetails: subarticlesDetailsReducer,
  subarticleUpdate: subarticleUpdateReducer,
  subarticleDelete: subarticleDeleteReducer,
  userList: UserReducers,
  userLogin: userSigninReducer,
  articlesCreate: articlesCreateReducer,
});
