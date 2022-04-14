import { List } from "../List/List";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../redux/actions/posts.actions";

export default function MyGamesList() {
  const session = useSelector((state) => state.session);
  const myGames = useSelector((state) => state.myGamesList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(getMyPosts(session.googleId));
    }
  }, [dispatch, session]);

  return (
    <>
      {myGames && <List items={myGames} authorId={session.googleId} isAuthor />}
    </>
  );
}
