import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export const NavBarPage = () => {
  return (
    <header className="header">
      <div className="sidenav">
        <NavLink className="header__link" activeClassName="header__link_active" to="/">findATable</NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/announcements">Найти игру</ NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/user-page">Профиль</ NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/logout">Выйти</ NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/eror">Error</NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/login">Войти</NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/logout">выйти</NavLink>

      </div>
    </header>
  )
}

