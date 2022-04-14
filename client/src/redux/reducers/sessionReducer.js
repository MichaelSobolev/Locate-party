import { ADD_SESSION, CLEAR_SESSION } from "../types";

export const sessionReducer = (state = false, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return action.payload;
    case CLEAR_SESSION:
      return { google_id: false }
    default:
      return state;
  }
};


