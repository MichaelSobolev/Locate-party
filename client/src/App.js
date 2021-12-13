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

function App() {
  const [user, setUser] = useState(null);

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
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user);

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
