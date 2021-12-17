import { useDispatch } from "react-redux";
import { createNews } from "../../redux/actions/news.action";
import {
  acceptPlayer,
  addPendingPlayer,
  declinePlayer,
  getPendingPlayersByPost,
  getPlayersByPost,
  removePlayer,
} from "../../redux/actions/players.actions";
import { addMockUser, addSystem } from "../../redux/actions/posts.actions";
import {
  fetchTester,
  getUserIdByGoogleId,
} from "../../redux/actions/user.actions";

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
            dispatch(getPlayersByPost(7));
          }}
        >
          getPlayersByPost
        </button>
        <button
          onClick={() => {
            dispatch(getUserIdByGoogleId("106252397252127773101"));
          }}
        >
          getUserIdByGoogleId
        </button>
        <button
          onClick={() => {
            dispatch(getPendingPlayersByPost(1));
          }}
        >
          getPendingPlayersByPost
        </button>
      </div>
      <div>
      {/* <iframe src="https://discord.com/widget?id=918399057280520243&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
      </div>
    </div>
  );
};
