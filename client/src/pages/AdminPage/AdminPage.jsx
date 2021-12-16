import { useDispatch } from "react-redux";
import { createNews } from "../../redux/actions/news.action";
import {
  acceptPlayer,
  addPendingPlayer,
  declinePlayer,
  getPlayersByPost,
  removePlayer,
} from "../../redux/actions/players.actions";
import { addMockUser, addSystem } from "../../redux/actions/posts.actions";
import { fetchTester, getUserIdByGoogleId } from "../../redux/actions/user.actions";

export const AdminPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addSystem());
        }}
      >
        add System
      </button>
      <button
        onClick={() => {
          dispatch(addMockUser());
        }}
      >
        add MockUser
      </button>
      <button
        onClick={() => {
          dispatch(createNews());
        }}
      >
        add addMockArticle
      </button>
      <div>
        <h2>For tests:</h2>
        <button
          onClick={() => {
            dispatch(addPendingPlayer({ post_id: 1, user_id: 1 }));
          }}
        >
          addPendingPlayer
        </button>
        <button
          onClick={() => {
            dispatch(acceptPlayer({ post_id: 1, user_id: 1 }));
          }}
        >
          acceptPlayer
        </button>
        <button
          onClick={() => {
            dispatch(declinePlayer({ post_id: 1, user_id: 1 }));
          }}
        >
          declinePlayer
        </button>
        <button
          onClick={() => {
            dispatch(removePlayer({ post_id: 1, user_id: 1 }));
          }}
        >
          removePlayer
        </button>
        <button
          onClick={() => {
            dispatch(getPlayersByPost(1));
          }}
        >
          getPlayersByPost
        </button>
        <button
          onClick={() => {
            dispatch(getUserIdByGoogleId("106252397252127773101"));
          }}
        >
          getPlayersByPost
        </button>
      </div>
    </div>
  );
};
