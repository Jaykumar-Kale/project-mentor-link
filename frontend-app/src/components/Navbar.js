
// Navbar.js
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#1e40af', color: 'white' }}>
      <Link to="/" style={{ color: 'white', fontWeight: 'bold' }}>MentorLink</Link>
      <ul style={{ display: 'flex', gap: '15px' }}>
        <li><Link to="/login" style={{ color: 'white' }}>Login</Link></li>
        <li><Link to="/register" style={{ color: 'white' }}>Register</Link></li>
        <li><Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
