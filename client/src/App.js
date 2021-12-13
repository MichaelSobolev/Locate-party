import "./App.css";
import { NavBarPage } from "./components/NavBarPage/NavBarPage";
import { SidebarPage } from "./components/SideBarPage/SideBarPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { AnnouncementsPage } from "./pages/AnnouncementsPage/AnnouncementsPage";
import { NewPostPage } from "./pages/newPostPage/newPostPage";
import { ErorPage } from "./pages/ErorPage/ErorPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./redux/actions/user.actions";

function App() {
  const [user, setUser] = useState(null);
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
          dispatch(createUser(resObject.user));
          // setUser(resObject.user);
          console.log(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="scroll-main-and-sidebar">
      <NavBarPage user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/new" element={<NewPostPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="*" element={<ErorPage />} />
      </Routes>
      <SidebarPage />
    </div>
  );
}

export default App;
