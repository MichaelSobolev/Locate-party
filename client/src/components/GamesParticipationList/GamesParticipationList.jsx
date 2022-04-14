import { List } from "../List/List";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyPosts,
  getMyPostsAsPlayer,
} from "../../redux/actions/posts.actions";

export default function GamesParticipationList() {
  const session = useSelector((state) => state.session);
  const myGames = useSelector((state) => state.myGamesAsPlayerList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(getMyPosts(session.googleId));
      dispatch(getMyPostsAsPlayer(session.googleId));
    }
  }, [dispatch, session]);
  return <>{myGames && <List items={myGames} myId={session.googleId} />}</>;
}
