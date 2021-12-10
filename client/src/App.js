import './App.css';
import { NavBarPage } from './components/NavBarPage/NavBarPage';
import { SidebarPage } from './components/SideBarPage/SideBarPage';
import { UserPage } from './pages/UserPage/UserPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage/AnnouncementsPage';
import { Routes, Route } from 'react-router-dom';
import { NewPostPage } from './pages/newPostPage/newPostPage';
import { ErorPage } from './pages/ErorPage/ErorPage';

function App() {
  return (
    <div className="scroll-main-and-sidebar">
      <NavBarPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/new" element={<NewPostPage />} />
        <Route path="*" element={<ErorPage />} />
      </Routes>
      <SidebarPage />
    </div>
  );
}

export default App;
