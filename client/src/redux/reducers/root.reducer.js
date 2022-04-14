import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { userReducer } from "./userReducer"
import { currentPostReducer } from "./currentPost.reducer"
import { newsReducer } from "./news.reducer"
import { currentRoomReducer } from "./currentRoom.reducer"
import { sessionReducer } from "./sessionReducer";
import { userInfoReducer } from "./userInfoReducer"
import { userDataReducer } from "./userDataReducer"
import { systemsReducer } from "./systemsReducer"
import { systemSelectorDataReducer } from "./systemSelectorDataReducer"
import { myGamesListReducer } from "./myGamesListReducer"
import { myGamesAsPlayerListReducer } from "./myGamesAsPlayerList"
import { chosenUserProfileReducer } from "./chosenUserProfileReducer"
import { interviewsListReducer } from "./interviewsListReducer"



export const rootReducer = combineReducers({
  posts: postReducer,
  currentPostStore: currentPostReducer,
  currentGameRoom: currentRoomReducer,
  news: newsReducer,
  user: userReducer,
  session: sessionReducer,
  user_info: userInfoReducer,
  userData: userDataReducer,
  chosenUserProfile: chosenUserProfileReducer,
  systems: systemsReducer,
  systemSelectorData: systemSelectorDataReducer,
  myGamesList: myGamesListReducer,
  myGamesAsPlayerList: myGamesAsPlayerListReducer,
  interviewsList: interviewsListReducer,
})
