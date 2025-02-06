import { Link } from "react-router-dom";

import React from "react";
import "./Navbar.css";
import logo from "../images/project-logo.webp";

const Navbar = () => {
  return (
    <>
      <nav className="container dark-nav">
      <img src={logo} alt="" className="logo" />
      
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/login"> Login </Link></li>
          <li><Link to="/Register"> Register </Link></li>
          <li><Link to="/Dashboard"> Dashboard </Link></li>
          <li><Link to="/MentorProfile"> Mentor Profile </Link></li>
          <li><Link to="/MenteeProfile"> Mentee Profile </Link></li>
          <li><Link to="/AdminDashboard"> Admin Dashboard </Link></li>
          </ul>

      </nav>
    </>
  );
};

export default Navbar;


{/* <Link to="/login"><button className='btn'> Login </button></Link> */}