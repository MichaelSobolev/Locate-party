import { SET_SYSTEM_NAMES } from "../types";

export const systemSelectorDataReducer = (state = [{ text: "D&D", value: 1 }], action) => {
  switch (action.type) {
    case SET_SYSTEM_NAMES:
      return action.payload;
    default:
      return state;
  }
};


