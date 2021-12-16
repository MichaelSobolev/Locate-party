import { Routes, Route } from "react-router-dom";

import { NavBarPage } from "../NavBarPage/NavBarPage";
import { Sidebar } from "../Sidebar/Sidebar";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

import { UserPage } from "../../pages/UserPage/UserPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { AnnouncementsPage } from "../../pages/AnnouncementsPage/AnnouncementsPage";
import { ErorPage } from "../../pages/ErorPage/ErorPage";

import styles from "./styles.module.css";
import { AdminPage } from "../../pages/AdminPage/AdminPage";
import { NewPostPage } from "../../pages/newPostPage/newPostPage";
import { PostPage } from "../../pages/PostPage/PostPage";
import { Logout } from "../Logout/Logout";
import { Login } from "../Login/Login";
import { PostCard } from "../PostCard/PostCard";
import { createSession } from "../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostEditPage } from "../../pages/PostEditPage/PostEditPage";
import { NewsPage } from "../../pages/NewsPage/NewsPage";
import { GameRoomPage } from "../../pages/GameRoomPage/GameRoomPage";
import { InterviewPage } from "../../pages/InterviewPage/InterviewPage";
import { TestForSocket } from "../testForSocket/testForSocket";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@", resObject.user);
          dispatch(createSession(resObject.user));
          // setUser(resObject.user);
          console.log("THIS", resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className={styles.app}>
      <NavBarPage />
      <main className={styles.main}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="/user-page" element={<UserPage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/announcements/new" element={<NewPostPage />} />
            <Route path="/announcements/edit/:id" element={<PostEditPage />} />
            <Route path="/announcements/:id" element={<PostPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/postcard" element={<PostCard />} />
            {/* АХТУНГ НИЖЕ ВРЕМЕННЫЙ РОУТ */}
            <Route path="/gameroom/:id" element={<GameRoomPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="/admin/test/:post_id/:user_id"
              element={<InterviewPage />}
            />

            <Route path="*" element={<ErorPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Sidebar />
      <TestForSocket/>
    </div>
  );
}

export default App;
