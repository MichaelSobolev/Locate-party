import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayersByPost } from "../../redux/actions/players.actions";

export const PlayersList = (post_id) => {
  const dispatch = useDispatch();
  // let players = useSelector((state) => state.currentGameRoom);

  useEffect(() => {
    dispatch(getPlayersByPost(post_id));

  }, []);
  return (
    <>
      <ul>
        <li>--------</li>
      </ul>
    </>
  );
};
