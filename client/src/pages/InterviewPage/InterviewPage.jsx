import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { acceptPlayer } from "../../redux/actions/players.actions";
import { getPost } from "../../redux/actions/posts.actions";

export const InterviewPage = () => {
  const [isAuthor, setIsAuthor] = useState(false);
  const { user_id, post_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.currentPostStore);
  console.log(post?.master_id);
  useEffect(() => {
    dispatch(getPost(post_id));
  }, []);
  useEffect(() => {
    if (post.length > 0) {
      console.log(post?.master_id);
    }
  }, [post]);

  useEffect(() => {
    console.log("|user_id|", typeof user_id, "|post.master_id|", post.master_id);

    if (Number(user_id) === post.master_id) {
      console.log(user_id === post?.master_id);
      setIsAuthor(true);
    }
  }, [post]);

  const addUser = () => {
    dispatch(acceptPlayer({ post_id, user_id }));
    navigate(`/gameroom/${post_id}`);
  };
  return (
    <div>
      <div>
        <h2>Тут будет чат</h2>
      </div>
      <h2> {isAuthor}</h2>
      {/* TODO проверка на сессию */}
      {isAuthor && (
        <ButtonPost action={addUser} isNavigation={false} path="">
          Принять юзера
        </ButtonPost>
      )}
    </div>
  );
};
