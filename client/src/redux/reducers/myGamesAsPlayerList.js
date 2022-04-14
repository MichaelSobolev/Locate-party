import { SET_MY_GAMES_AS_PlAYER, DELETE_MY_GAME_AS_PlAYER } from "../types";

export const myGamesAsPlayerListReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MY_GAMES_AS_PlAYER: {
      return payload;
    }
    case DELETE_MY_GAME_AS_PlAYER: {
      const id = payload;
      return state.filter((el) => el.id !== id);
    }
    default: {
      return state;
    }
  }
};
