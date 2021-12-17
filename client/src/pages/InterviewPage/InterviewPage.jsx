import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { acceptPlayer } from "../../redux/actions/players.actions";
import { getPost } from "../../redux/actions/posts.actions";
import { Chat } from "../GameRoomPage/Chat/Chat";

import "./styles.css";

export const InterviewPage = () => {
  const [isAuthor, setIsAuthor] = useState(false);

  const { user_id, post_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.currentPostStore);
  console.log(post?.master_id);
  const session = useSelector((state) => state?.session[0]);
  const user_name = session?.displayName;
  console.log();
  const image = session?.photos[0]?.value;

  useEffect(() => {
    dispatch(getPost(post_id));
  }, []);
  useEffect(() => {
    if (post.length > 0) {
      console.log(post?.master_id);
    }
  }, [post]);

  useEffect(() => {
    console.log(
      "|user_id|",
      typeof user_id,
      "|post.master_id|",
      post.master_id
    );

    if (Number(user_id) === post.master_id) {
      console.log(user_id === post?.master_id);
      setIsAuthor(true);
    }
  }, [post]);

  return (
    <div className="chat_main">
      <div className="game_description">
        <div className="chatik">
          <Chat
            isAuthor={isAuthor}
            dispatchPayload={{ user_id, post_id }}
            user_name={user_name}
            uri={image}
            
          />
        </div>
        {/* <h2> {isAuthor}</h2> */}
        {/* TODO проверка на сессию */}
      </div>
    </div>
  );
};
