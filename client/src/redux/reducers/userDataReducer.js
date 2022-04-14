import { SET_USER_DATA, CLEAR_USER_DATA } from "../types";

export const userDataReducer = (state = false, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return action.payload;
    case CLEAR_USER_DATA:
      return false
    default:
      return state;
  }
};


