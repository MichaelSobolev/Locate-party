import { ADD_SESSION, CLEAR_SESSION } from "../types";

export const sessionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SESSION:
      return [...state, action.payload];
    case CLEAR_SESSION:
      return [{}]
    default:
      return state;
  }
};
