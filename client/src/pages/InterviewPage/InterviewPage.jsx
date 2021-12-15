import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { acceptPlayer } from "../../redux/actions/players.actions";

export const InterviewPage = () => {
  const { user_id, post_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addUser = () => {
    dispatch(acceptPlayer({ post_id, user_id }));
    navigate(`/gameroom/${post_id}`);
  };
  return (
    <div>
      <div>
        <h2>Тут будет чат</h2>
      </div>
      {/* TODO проверка на сессию */}
      <ButtonPost action={addUser} isNavigation={false} path="">
        Принять юзера
      </ButtonPost>
    </div>
  );
};
