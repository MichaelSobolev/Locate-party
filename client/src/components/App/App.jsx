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
import { PostCard} from "../PostCard/PostCard"

function App() {
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
            <Route path="/announcements/:id" element={<PostPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<ErorPage />} />
            <Route path='/postcard' element={<PostCard />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
