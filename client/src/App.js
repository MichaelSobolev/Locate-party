import './App.css';
import { NavBarPage } from './components/NavBarPage/NavBarPage';
import { SidebarPage } from './components/SideBarPage/SideBarPage';
import { UserPage } from './pages/UserPage/UserPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage/AnnouncementsPage';
import { Routes, Route } from 'react-router-dom';
import { NewPostPage } from './pages/newPostPage/newPostPage';

function App() {
  return (
    <div className="App">
      <NavBarPage />
      <SidebarPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/new" element={<NewPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
