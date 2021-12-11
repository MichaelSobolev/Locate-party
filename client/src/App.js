import './App.css';
import { NavBarPage } from './components/NavBarPage/NavBarPage';
import { SidebarPage } from './components/SideBarPage/SideBarPage';
import { UserPage } from './pages/UserPage/UserPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage/AnnouncementsPage';
import { Routes, Route } from 'react-router-dom';
import { ErorPage } from './pages/ErorPage/ErorPage';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="wrapper">
      <NavBarPage />
      <div className="scroll-main-and-sidebar">
        <main className="main">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/user-page" element={<UserPage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/eror" element={<ErorPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <SidebarPage />
      </div>
    </div>
  );
}

export default App;
