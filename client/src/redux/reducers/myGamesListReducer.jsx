import { DELETE_MY_GAME, SET_MY_GAMES } from "../types";

export const myGamesListReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MY_GAMES: {
      return payload;
    }
    case DELETE_MY_GAME: {
      const id = payload;
      return state.filter((el) => el.id !== id);
    }
    default: {
      return state;
    }
  }
};
