import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>Savvy Swap</h1>
        <ul className="nav-links">
          <Link to="/" className="navbar-link">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/login" className="navbar-link">
            {" "}
            <li className="nav-link">Log In</li>
          </Link>
          <Link to="/register" className="navbar-link">
            <li className="nav-link">Sign Up</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
