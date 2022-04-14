import { SET_SYSTEMS } from "../types";

export const systemsReducer = (state = [{ title: "D&D", id: 1 }], action) => {
  switch (action.type) {
    case SET_SYSTEMS:
      return action.payload;
    default:
      return state;
  }
};


