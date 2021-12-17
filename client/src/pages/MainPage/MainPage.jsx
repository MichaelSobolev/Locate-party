import React from "react";
import { useSelector } from "react-redux";

import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Title";

import styles from "./styles.module.css";
import { GameBox } from "./GameBox/GameBox";
import { Login } from "../../components/Login/Login";
// import { Video } from './Video/Video';
// import video from './Video/videofiles/VideoDragon.mp4';

export const MainPage = () => {
  const data = useSelector((state) => state.session);

  return (
    <div>
      {/* <Video source={video} /> */}
      <h3>Топ игр недели </h3>
      <GameBox />
      <Title as="h2">
        О нас: Это сайт для любителей настольно ролевых игр.
      </Title>
      <Text>
        Здесь ты сможешь найти людей, котрые любят настольные игры, так же как и
        ты!
        <br />
        Наша цель - сделать так, чтобы как можно больше игроков смогли найти
        себе игру, а ведущим было удобно создавать обьявления о наборе.
      </Text>
      {/* <div className={styles["registations-main"] }> */}
      {/* <iframe
          src="https://discord.com/widget?id=921347124573134889&theme=dark"
          width="auto"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe> */}
      {/* </div> */}

      <div>
        {data[0]?.id ? (
          ""
        ) : (
          <>
            <div className={styles["registations-main"]}>
              {" "}
              <Login />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
