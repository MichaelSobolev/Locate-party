import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { userReducer } from "./user.reducer"
import { currentPostReducer } from "./currentPost.reducer"
import { newsReducer } from "./news.reducer"


export const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  currentPostStore: currentPostReducer,
  news: newsReducer
})
