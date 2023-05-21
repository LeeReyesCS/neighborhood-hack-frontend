import React from "react";
import "./Register.css";
import LandingPic from "../../images/Landing_page.jpg";
import { useState } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Nav from "../../components/navBar/Nav";

const Register = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    zipCode:"",
    phone:"",
    services:[],
    skills:[]
  });

  const { name, email, password, zipCode, phone, services, skills } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const registerUser = async (userData) => {
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

  // const validateZipCode = async (zipcode) => {
  //   try {
  //     const response = await axios.get(`https://api.zipcodeapi.com/rest/API_KEY_HERE/info.json/${zipcode}/degrees`);
  //     const isValidZipCode = response.data.city !== null;
  //     return isValidZipCode;
  //   } catch (error) {
  //     // Handle any error that occurred during the API call
  //     console.error(error);
  //     return false;
  //   }
  // };

  const handleKeySkillsPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() !== "") {
        setUser({
          ...user,
          skills: [...skills, event.target.value.trim()]
        });
        event.target.value = ""; // Clear the input field after appending
      }
    }
  };
  const handleKeyServicePress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() !== "") {
        setUser({
          ...user,
          services: [...services, event.target.value.trim()]
        });
        event.target.value = ""; // Clear the input field after appending
      }
    }
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const isValidZipCode = await validateZipCode(zipCode);
  //   if (isValidZipCode) {
  //     await registerUser(user);
  //     navigate('/homepage');
  //   } else {
  //     console.log('Invalid ZipCode');
  //   }
  // }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerUser(user);
      navigate('/homepage');
    } catch(error) {
      console.log('Invalid Login');
    }
  }
  
  // validate zipcode exists with zipcode api
  return (
    <>
      <Nav />
      <div className="reg-page">
        <img className="landing_pic" src={LandingPic} alt="" />
        <div className="reg-container">
          <h1>Register</h1>
          <ul className="reg-list-items">
            <li className="reg-list-item">
              {/* <label>Name</label> */}
              <input type="text" placeholder="Enter Your Name" name="name" required value={name} onChange={(event)=>onInputChange(event)} />
            </li>
            <li className="reg-list-item">
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder="Enter Your Password"
                required name="password" value={password} onChange={(event)=>onInputChange(event)}
              />
            </li>
            <li className="reg-list-item">
              {/* <label>ZipCode</label> */}
              <input type="text" placeholder="Enter your ZipCode" name="zipCode" required value={zipCode} onChange={(event)=>onInputChange(event)} />
            </li>
            <li className="reg-list-item">
              {/* <label>Email</label> */}
              <input type="email" placeholder="Enter your Email" name="email" required value={email} onChange={(event)=>onInputChange(event)}/>
            </li>
            <li className="reg-list-item">
              {/* <label>Phone</label> */}
              <input type="tel" placeholder="Enter your Phone" name="phone" required value={phone} onChange={(event)=>onInputChange(event)} />
            </li>
            <li className="reg-list-item">
              {/* <label>Services</label> */}
              <input type="text" required name="services" onKeyDown={handleKeyServicePress} />
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </li>
          <li className="reg-list-item">
            {/* <label>Skills</label> */}
            <input type="text" required name="skills"  onKeyDown={handleKeySkillsPress}  />
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </li>
          <Link to="/login">
            {" "}
              <button className="reg-btn" onSubmit={onSubmit}>Register</button>
            </Link>
          </ul>
        </div>
      </div>
    </>
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
