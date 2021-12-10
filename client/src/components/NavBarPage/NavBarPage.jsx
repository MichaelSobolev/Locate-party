import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const NavBarPage = () => {
  return (
    <header>
      <div className="sidenav">
        <Link to="/" className="headerTag">findATable</Link>
        <Link to="/announcements">Найти игру</ Link>
        <Link to="/user-page">Профиль</ Link>
        <Link to="/logout">Выйти</ Link>
      </div>
    </header>
  )
}

