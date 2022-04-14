import { SET_INTERVIEWS } from "../types";

export const interviewsListReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_INTERVIEWS: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
