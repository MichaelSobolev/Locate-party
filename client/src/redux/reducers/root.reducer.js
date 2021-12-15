import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { userReducer } from "./userReducer"
import { currentPostReducer } from "./currentPost.reducer"
import { newsReducer } from "./news.reducer"
import { currentRoomReducer } from "./currentRoom.reducer"
import { sessionReducer } from "./sessionReducer";



export const rootReducer = combineReducers({
  posts: postReducer,
  currentPostStore: currentPostReducer,
  currentGameRoom: currentRoomReducer,
  news: newsReducer,
  user: userReducer,
  session: sessionReducer,
})
