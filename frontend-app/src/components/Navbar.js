import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#1e40af", color: "white" }}>
      {/* Brand Logo */}
      <Link to="/" style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
        MentorLink
      </Link>

      {/* Navigation Links */}
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
        <li><Link to="/privacy-policy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</Link></li>
        <li><Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link></li>
        <li><Link to="/mentorprofile" style={{ color: "white", textDecoration: "none" }}>Mentor Profile</Link></li>
        <li><Link to="/menteeprofile" style={{ color: "white", textDecoration: "none" }}>Mentee Profile</Link></li>
        <li><Link to="/admindashboard" style={{ color: "white", textDecoration: "none" }}>Admin Dashboard</Link></li>
      </ul>

      {/* Authentication Links */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/login" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Login</Link>
        <Link to="/register" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
