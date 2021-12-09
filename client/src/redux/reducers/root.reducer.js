import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { userReducer } from "./user.reducer"


export const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer
})
