import { RANDOM_RESULT } from "../types";

const initialState = {
  result: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
      case RANDOM_RESULT: {
        return { 
          ...state,
          result: action.payload 
        }
      }
      default:
          return state;
  }
}