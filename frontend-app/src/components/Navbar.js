// Component (Small Part of Webpage.)

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Mentor Management</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/MentorProfile">Mentor Profile</Link></li>
        <li><Link to="/MenteeProfile">Mentee Profile</Link></li>
        <li><Link to="/AdminDashboard">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;