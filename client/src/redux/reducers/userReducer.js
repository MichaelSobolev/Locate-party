// import user from "../../../../server/src/db/models/user";
import {
  ADD_INFO, CLEAR_USER, SET_USER_REDUX,
} from "../types";

export const userReducer = (state = [], action) => {
  //const { type, payload } = action;
  switch (action.type) {
    case ADD_INFO:
      return [...state, action.payload];
    case SET_USER_REDUX:
      const user = action.payload
      return user
    case CLEAR_USER:
      return []

    // case SET_USER_ERROR: {
    //   const { error } = payload;

    //   return {
    //     value: null,
    //     error,
    //   };
    // }
    // case ADD_USER:
    //   const { user } = payload;
    //   return { value: user, error: null };


    // case SET_USER: {
    //   const { user } = payload;

    //   return {
    //     value: user,
    //     error: null,
    //   };
    // }
    // case USER_LOGOUT: {
    //   return {
    //     value: null,
    //     error: null,
    //   };
    // }
    // case VALIDATE_SUCCESS: {
    //   return {
    //     error: null,
    //     value: true,
    //     // number: null
    //   };
    // }

    // case VALIDATE_ERROR: {
    //   const { error } = payload;
    //   return {
    //     error,
    //     value: false,
    //     // number: null
    //   };
    // }
    default:
      return state;
  }
};
