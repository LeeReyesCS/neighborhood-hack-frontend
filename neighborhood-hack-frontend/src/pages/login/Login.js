import React from "react";
import "./Login.css";
import LandingPic from "../../images/Landing_page.jpg";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/navBar/Nav";
import Cookies from 'universal-cookie';
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const loginUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/neighbors/register', userData);
      const token = response.data.token;
      const expirationDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
      cookies.set('token', token, { path: '/', expires: expirationDate });      
      console.log(token);
    } catch (error) {
      // Handle any error that occurred during the API call
      console.error(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(user);
      navigate('/homepage');
    } catch(error) {
      console.log('Invalid Login');
    }
  }

  return (
    <>
      <Nav />
      <div>
        <img className="landing_pic" src={LandingPic} alt="" />
        <div className="logIn-container">
          <h1>Log In</h1>
          <ul className="logIn-list-items">
            <li className="logIn-list-item">
              {/* <label>Email</label> */}
              <input type="email" placeholder="Enter Your Email" required />
            </li>
            <li className="logIn-list-item">
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </li>
            <Link to="/homepage">
              {" "}
              <button className="logIn-btn">Log In</button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Login;
