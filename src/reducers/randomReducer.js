import { RANDOM_ERROR_HIDE, RANDOM_ERROR_SHOW, RANDOM_RESULTS } from "../types";

const initialState = {
  results: [],
  error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case RANDOM_RESULTS: {
      return {
        ...state,
        results: action.payload
      }
    }
    case RANDOM_ERROR_SHOW: {
      return {
        ...state, 
        error: action.payload
      }
    }
    case RANDOM_ERROR_HIDE: {
      return {
        ...state, 
        error: null
      }
    }
    default: return state;
  }
}