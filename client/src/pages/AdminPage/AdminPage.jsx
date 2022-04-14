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
import { getUserIdByGoogleId } from "../../redux/actions/user.actions";
import { D20Spinner } from "../../components/D20Spinner/D20Spinner";
import { List } from "../../components/List/List";

export const AdminPage = () => {
  const dispatch = useDispatch();
  const items = [
    { text: "Игра 1" },
    { text: "Игра 2" },
    { text: "Игра 3" },
    { text: "Игра 4" },
    { text: "Игра 5" },
  ];
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
        <D20Spinner />
      </div>
      <div>
        <List items={items} />
      </div>
    </div>
  );
};
