
import { SET_CHOSEN_PROFILE, CLEAR_CHOSEN_PROFILE } from "../types";

export const chosenUserProfileReducer = (state = false, action) => {
  switch (action.type) {
    case SET_CHOSEN_PROFILE:
      return action.payload;
    case CLEAR_CHOSEN_PROFILE:
      return false
    default:
      return state;
  }
};

