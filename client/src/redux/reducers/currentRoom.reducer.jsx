import { CLEAR_ROOM_DATA, SET_ROOM_DATA } from "../types";

export const currentRoomReducer = (state = [{}], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ROOM_DATA: {
      const data = payload;
     
      return data;
    }
    case CLEAR_ROOM_DATA: {
      return [{}];
    }

    default: {
      return state;
    }
  }
};
