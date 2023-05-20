import React from "react";
import "./Login.css";
import LandingPic from "../../images/Landing_page.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <img className="landing_pic" src={LandingPic} alt="" />
      <div className="logIn-container">
        <h1>Log In</h1>
        <ul className="logIn-list-items">
          <li className="logIn-list-item">
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" required />
          </li>
          <li className="logIn-list-item">
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" required />
          </li>
          <Link to="/homepage">
            {" "}
            <button className="logIn-btn">Log In</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Login;
