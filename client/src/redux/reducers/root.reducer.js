import { combineReducers } from "redux";
import { postReducer } from "./post.reducer";
import { userReducer } from "./userReducer";
import { currentPostReducer } from "./currentPost.reducer";
import { sessionReducer } from "./sessionReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  currentPostStore: currentPostReducer,
  session: sessionReducer,
});
