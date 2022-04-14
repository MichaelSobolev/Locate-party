import React, { useState } from "react";
import styles from "./styles.module.css";

import { ProfileNavbar } from "../../components/ProfileNavbar/ProfileNavbar";
import { Profile } from "../../components/Profile/Profile";
import MyGamesList from "../../components/MyGamesList/MyGamesList";
import GamesParticipationList from "../../components/GamesParticipationList/GamesParticipationList";

export const ProfilePage = ({ userName, userImage, userEmail }) => {
  const [activePage, changeActivePage] = useState(0);

  return (
    <>
      <div className={styles["user-page"]}>
        <ProfileNavbar
          active={activePage}
          changeActivePage={changeActivePage}
        />
        {activePage === 0 && <Profile />}
        {activePage === 1 && <MyGamesList />}
        {activePage === 2 && <GamesParticipationList />}
      </div>
    </>
  );
};
