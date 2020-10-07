import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <>
      <nav className="nav-menu">
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Localização</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
