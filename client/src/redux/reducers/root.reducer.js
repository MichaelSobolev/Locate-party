import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { userReducer } from "./user.reducer"
import { currentPostReducer } from "./currentPost.reducer"
import { newsReducer } from "./news.reducer"
import { currentRoomReducer } from "./currentRoom.reducer"


export const rootReducer = combineReducers({
  posts: postReducer,
  currentPostStore: currentPostReducer,
  currentGameRoom: currentRoomReducer,
  news: newsReducer,
  user: userReducer,

})
