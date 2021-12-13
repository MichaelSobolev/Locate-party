import { Routes, Route } from 'react-router-dom';

import { NavBarPage } from '../NavBarPage/NavBarPage';
import { Sidebar } from '../Sidebar/Sidebar';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

import { UserPage } from '../../pages/UserPage/UserPage';
import { MainPage } from '../../pages/MainPage/MainPage';
import { AnnouncementsPage } from '../../pages/AnnouncementsPage/AnnouncementsPage';
import { ErorPage } from '../../pages/ErorPage/ErorPage';

import styles from './styles.module.css';

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
            <Route path="*" element={<ErorPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
