import React, { useEffect, useState } from "react";

// import { Title } from "../../components/Title/Title";

import styles from "./styles.module.css";
// import { UserInfo } from "./UserInfo";
// import { LastGameList } from "./LastGameList";
import { ProfileNavbar } from "../../components/ProfileNavbar/ProfileNavbar";
import { Profile } from "../../components/Profile/Profile";
import MyGamesList from "../../components/MyGamesList/MyGamesList";
import GamesParticipationList from "../../components/GamesParticipationList/GamesParticipationList";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileInfoById } from "../../redux/actions/user.actions";

export const ProfileMenu = ({ userId }) => {
  const dispatch = useDispatch();
  const [activePage, changeActivePage] = useState(0);
  const [isOwner, setIsOwner] = useState(false);
  let session = useSelector((state) => state.session);

  let chosenUserProfile = useSelector((state) => state.chosenUserProfile);

  useEffect(() => {
    dispatch(getUserProfileInfoById(userId));
  }, [dispatch]);
  useEffect(() => {
    if (session.googleId === chosenUserProfile.googleId) {
      setIsOwner(true);
    }
  }, [session, chosenUserProfile]);
  return (
    <>
      <div className={styles["user-page"]}>
        <ProfileNavbar
          active={activePage}
          changeActivePage={changeActivePage}
          isOwner={isOwner}
        />
        {activePage === 0 && (
          <Profile data={chosenUserProfile} isOwner={isOwner} />
        )}
        {activePage === 1 && <MyGamesList />}
        {activePage === 2 && <GamesParticipationList />}
      </div>
    </>
  );
};
