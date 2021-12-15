import { ADD_SESSION } from "../types";

export const sessionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SESSION:
      return [...state, action.payload];

    default:
      return state;
  }
};
