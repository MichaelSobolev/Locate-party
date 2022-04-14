import { useNavigate } from "react-router";
import { Button } from "../Button/Button";
import { ShowProfileDescription } from "../ShowProfileDescription/ShowProfileDescription";
import styles from "./Profile.module.css";

export const Profile = ({ data, isOwner }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles["profile-container"]}>
      <img src={data.picture_link} alt="" />
      <ShowProfileDescription data={data} isOwner={isOwner} />
      {isOwner && (
        <Button
          clickFunction={() => {
            navigate(`/user-page/edit/${data.id}`);
          }}
        >
          Обновить информацию
        </Button>
      )}
    </div>
  );
};
