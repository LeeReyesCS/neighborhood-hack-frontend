import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/Savvy_Swap.png";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <img src={Logo} alt="" />
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
