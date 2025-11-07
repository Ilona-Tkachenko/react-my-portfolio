import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">ІТ</div>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/react-my-portfolio"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Про мене
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-city"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Моє місто
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-future"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Мій розвиток
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
