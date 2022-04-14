import { Routes, Route } from "react-router-dom";

import { NavBarPage } from "../NavBarPage/NavBarPage";
import { Sidebar } from "../Sidebar/Sidebar";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { useNavigate } from "react-router";
import { UserPage } from "../../pages/UserPage/UserPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { AnnouncementsPage } from "../../pages/AnnouncementsPage/AnnouncementsPage";
import { ErorPage } from "../../pages/ErorPage/ErorPage";

import styles from "./styles.module.css";
import { AdminPage } from "../../pages/AdminPage/AdminPage";
import { NewPostPage } from "../../pages/newPostPage/newPostPage";
import { PostPage } from "../../pages/PostPage/PostPage";
import { ChangeGoogleProfile } from "../ChangeGoogleProfile/ChangeGoogleProfile";
import { Login } from "../Login/Login";
import { PostCard } from "../PostCard/PostCard";
import { createSession } from "../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostEditPage } from "../../pages/PostEditPage/PostEditPage";
import { NewsPage } from "../../pages/NewsPage/NewsPage";
import { GameRoomPage } from "../../pages/GameRoomPage/GameRoomPage";
import { InterviewPage } from "../../pages/InterviewPage/InterviewPage";
// import { TestForSocket } from "../testForSocket/testForSocket";
import { UserInfo } from "../../pages/UserPage/UserInfo/UserInfo";
import Snowfall from "react-snowfall";
import { LoginErrorPage } from "../../pages/ErorPage/LoginErrorPage";
import { EditUserProfilePage } from "../../pages/EditUserProfilePage/EditUserProfilePage";
import { ProtectedRoutes } from "../ProtectedRoute/ProtectedRoute";
import { InterviewListPage } from "../../pages/InterviewListPage/InterviewListPage";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((state) => state.session);
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    (function getUser() {
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
          if (response.status === 200 || response.status === 201)
            return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          dispatch(createSession(resObject.user));
        })
        .catch((err) => {
          console.log(err);
          navigate(`/loginError`);
        });
    })();
  }, [dispatch, navigate]);

  const isUserLoggedIn = useSelector((state) => state.session);

  const [theme, setTheme] = useState(false);

  return (
    <div className={styles.app}>
      {isUserLoggedIn?.googleId ? (
        <NavBarPage setTheme={setTheme} userId={userData.id} />
      ) : (
        ""
      )}
      <main className={styles.main}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route element={<ProtectedRoutes session={session} />}>
              <Route path="/user-page/:user_id" element={<UserPage />} />

              <Route
                path="/user-page/edit/:user_id"
                element={<EditUserProfilePage />}
              />
              <Route path="/user-page/firstEdit" element={<UserInfo />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/announcements/new" element={<NewPostPage />} />
              <Route
                path="/interview/list/:post_id/"
                element={<InterviewListPage />}
              />
              <Route
                path="/announcements/interview/:post_id/:user_id"
                element={<InterviewPage />}
              />
              <Route
                path="/announcements/edit/:id"
                element={<PostEditPage />}
              />
              <Route path="/announcements/:id" element={<PostPage />} />
              <Route
                path="/changeGoogleProfile"
                element={<ChangeGoogleProfile />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/postcard" element={<PostCard />} />
              <Route path="/loginError" element={<LoginErrorPage />} />

              <Route path="/gameroom/:id" element={<GameRoomPage />} />
              <Route path="*" element={<ErorPage />} />
            </Route>
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </ErrorBoundary>
        {theme ? <Snowfall /> : null}
      </main>
      {isUserLoggedIn?.googleId ? <Sidebar /> : ""}
    </div>
  );
}

export default App;
