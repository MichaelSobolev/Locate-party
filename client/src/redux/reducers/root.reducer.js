import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { userReducer } from "./user.reducer"
import { currentPostReducer } from "./currentPost.reducer"


export const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  currentPostStore: currentPostReducer
})
