import {
  SUBARTICLES_LIST_REQUEST,
  SUBARTICLES_LIST_SUCCESS,
  SUBARTICLES_LIST_FAIL,
  SUBARTICLES_CREATE_REQUEST,
  SUBARTICLES_CREATE_SUCCESS,
  SUBARTICLES_CREATE_FAIL,
  SUBARTICLES_CREATE_RESET,
  SUBARTICLES_DETAILS_REQUEST,
  SUBARTICLES_DETAILS_SUCCESS,
  SUBARTICLES_DETAILS_FAIL,
  SUBARTICLE_UPDATE_REQUEST,
  SUBARTICLE_UPDATE_SUCCESS,
  SUBARTICLE_UPDATE_FAIL,
  SUBARTICLE_UPDATE_RESET,
  SUBARTICLE_DELETE_FAIL,
  SUBARTICLE_DELETE_REQUEST,
  SUBARTICLE_DELETE_SUCCESS,
  SUBARTICLE_DELETE_RESET
} from "../constants/subarticlesConstants";

export const subarticlesListReducer = (
  state = { loading: true, subarticles: [] },
  action
) => {
  switch (action.type) {
    case SUBARTICLES_LIST_REQUEST:
      return { loading: true };
    case SUBARTICLES_LIST_SUCCESS:
      return { loading: false, subarticles: action.payload };
    case SUBARTICLES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subarticlesDetailsReducer = (
  state = { loading: true, subarticle: {} },
  action
) => {
  switch (action.type) {
    case SUBARTICLES_DETAILS_REQUEST:
      return { loading: true };
    case SUBARTICLES_DETAILS_SUCCESS:
      return { loading: false, subarticle: action.payload };
    case SUBARTICLES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subarticlesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBARTICLES_CREATE_REQUEST:
      return { loading: true };
    case SUBARTICLES_CREATE_SUCCESS:
      return { loading: false, success: true, subarticle: action.payload };
    case SUBARTICLES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SUBARTICLES_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const subarticleUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBARTICLE_UPDATE_REQUEST:
      return { loading: true };
    case SUBARTICLE_UPDATE_SUCCESS:
      return { loading: false, success: true, subarticle: action.payload };
    case SUBARTICLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SUBARTICLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const subarticleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBARTICLE_DELETE_REQUEST:
      return { loading: true };
    case SUBARTICLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SUBARTICLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case SUBARTICLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
