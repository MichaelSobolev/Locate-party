import './App.css';
import { NavBarPage } from './components/NavBarPage/NavBarPage';
import { SidebarPage } from './components/SideBarPage/SideBarPage';
import { UserPage } from './pages/UserPage/UserPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage/AnnouncementsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <NavBarPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
      </Routes>
      {/* <SidebarPage /> */}
    </div>
  );
}

export default App;
