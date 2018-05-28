import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <header>
    <nav className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/guestlist" className="nav-link">Guestlist</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tables" className="nav-link">Tables</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rsvp" className="nav-link">RSVP</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;