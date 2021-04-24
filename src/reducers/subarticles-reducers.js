import {
  SUBARTICLES_LIST,
  SUBARTICLES_DETAILS,
  SUBARTICLES_CREATE,
} from "../constants/subarticlesConstants";

export const subarticlesListReducer = (state = [], action) => {
  switch (action.type) {
    case SUBARTICLES_LIST:
      return action.payload;
    case SUBARTICLES_DETAILS:
      return action.payload;
    case SUBARTICLES_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
