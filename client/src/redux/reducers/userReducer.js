// import user from "../../../../server/src/db/models/user";
import {
  ADD_INFO, CLEAR_USER, SET_USER_REDUX,
} from "../types";

export const userReducer = (state = false, action) => {
  switch (action.type) {
    case ADD_INFO:
      return [...state, action.payload];
    case SET_USER_REDUX:
      const user = action.payload
      return user
    case CLEAR_USER:
      return []

    default:
      return state;
  }
};
