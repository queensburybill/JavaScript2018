import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="NavBar top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <NavLink to="/bookshelf">My Bookshelf</NavLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            <Link to="/search">
              <i className="fas fa-search" aria-hidden="true" /> Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
