import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
// import { acceptPlayer } from "../../redux/actions/players.actions";
import { getPost } from "../../redux/actions/posts.actions";
import { Chat } from "../GameRoomPage/Chat/Chat";

import "./styles.css";

export const InterviewPage = () => {
  const [isAuthor, setIsAuthor] = useState(false);

  const { user_id, post_id } = useParams();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const post = useSelector((state) => state.currentPostStore);
  const userDatabaseId = useSelector((state) => state.userData.id);
  const session = useSelector((state) => state?.session);
  const user_name = session?.name;
  const image = session?.picture_link;

  useEffect(() => {
    dispatch(getPost(post_id));
  }, [dispatch]);

  useEffect(() => {
    if (userDatabaseId === post.master_id) {
      setIsAuthor(true);
    }
  }, []);

  return (
    <div className="chat_main">
      <div className="game_description">
        <div className="chatik">
          <Chat
            isAuthor={isAuthor}
            dispatchPayload={{ user_id, post_id }}
            user_name={user_name}
            uri={image}
            user_id={user_id}
            post_id={post_id}
          />
        </div>
      </div>
    </div>
  );
};
