import React from "react";
import { useSelector } from "react-redux";

import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Title";

import styles from "./styles.module.css";
import { GameBox } from "./GameBox/GameBox";
import { Login } from "../../components/Login/Login";
import { D20Spinner } from "../../components/D20Spinner/D20Spinner";

export const MainPage = ({ spinner }) => {
  const user = useSelector((state) => state.session);

  return (
    <>
      {spinner ? (
        <D20Spinner big redirect />
      ) : (
        <div>
          <h3>Топ игр недели </h3>
          <GameBox />
          <Title as="h2">
            О нас: Это сайт для любителей настольно ролевых игр.
          </Title>
          <Text>
            Здесь ты сможешь найти людей, котрые любят настольные игры, так же
            как и ты!
            <br />
            Наша цель - сделать так, чтобы как можно больше игроков смогли найти
            себе игру, а ведущим было удобно создавать обьявления о наборе.
          </Text>
          <div>
            {user?.googleId ? (
              ""
            ) : (
              <>
                <div className={styles["registations-main"]}>
                  <Login />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
