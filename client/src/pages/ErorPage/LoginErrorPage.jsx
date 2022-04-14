import React from "react";
import { ErorPage } from "./ErorPage";

// import styles from "./index.module.css";

export const LoginErrorPage = () => {
  return (
    <>
      <h2>Что-то пошло не так... Вероятно произошла ошибка на стороне сервера. Пожалуйста подождите, разработчик скоро всё исправит. Спасибо.</h2>
      <ErorPage/>
    </>
  );
};
