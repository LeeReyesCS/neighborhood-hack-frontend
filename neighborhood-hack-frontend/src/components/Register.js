import React from "react";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="reg-page">
      <div className="reg-container">
        <h1>Register</h1>
        <ul className="reg-list-items">
          <li className="reg-list-item">
            <label>Name</label>
            <input type="text" placeholder="Enter Your Name" required />
          </li>
          <li className="reg-list-item">
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" required />
          </li>
          <li className="reg-list-item">
            <label>ZipCode</label>
            <input type="text" placeholder="Enter your ZipCode" required />
          </li>
          <li className="reg-list-item">
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" required />
          </li>
          <li className="reg-list-item">
            <label>Phone</label>
            <input type="tel" placeholder="Enter your Phone" required />
          </li>
          <li className="reg-list-item">
            <label>Services</label>
            <input type="text" required />
          </li>
          <li className="reg-list-item">
            <label>Skills</label>
            <input type="text" required />
          </li>
        </ul>
      </div>
    </div>
  );
};

// field requirements
// name
// password
// zipCode
// email
// phone
// services
// skills

export default Register;
