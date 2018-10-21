import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <NavLink to="/" className="navbar-brand">
        Movies
      </NavLink>

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink to="/now-playing" className="nav-link">
            Now Playing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/theatres" className="nav-link">
            Theatres
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
