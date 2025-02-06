// Component (Small Part of Webpage.)

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Mentor Management</h2>
      <div className="navbar" >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/MentorProfile">Mentor Profile</Link>
        <Link to="/MenteeProfile">Mentee Profile</Link>
        <Link to="/AdminDashboard">Admin Dashboard</Link>
        <Link to="/textform">Text Form </Link>
      </div>
    </nav>
  );
}

export default Navbar;
