import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { getPendingPlayersByPostInterviews } from "../../redux/actions/players.actions";

export const InterviewListPage = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const interviews = useSelector((state) => state.interviewsList);
  useEffect(() => {
    dispatch(getPendingPlayersByPostInterviews(post_id));
  }, []);
  const redirectToInterviewPage = (post_id, user_id) => {
    navigate(`/announcements/interview/${post_id}/${user_id}`);
  };
  return (
    <div>
      {interviews.length < 1 && <p>Откликов на ваше объявление ещё не было</p>}
      {interviews &&
        interviews.map((element) => (
          <div key={element.user_id}>
            {element["user_to_player.name"]}

            <Button
              size="s"
              clickFunction={() =>
                redirectToInterviewPage(
                  element["post_to_player.id"],
                  element["user_to_player.id"]
                )
              }
            >
              Перейти к собеседованию
            </Button>
          </div>
        ))}
    </div>
  );
};
