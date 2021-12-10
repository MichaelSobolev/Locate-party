import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


export const SidebarPage = () => {
  return (
    <div class="sidebar">
      <Link to="/">Мои игра1</Link>
      <Link to='/'>Мои игра2</Link>
      <Link to='/' >Мои игра3</Link >
    </div >
  )
}
