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



// import { Link } from "react-router-dom";
// import React from "react";
// import "./Navbar.css";
// import logo from "../../Images/logo.png";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="container">
//         <img src={logo} alt="" className="logo" />
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/Register">Register</Link>
//           </li>
//           <li>
//             <Link to="/Dashboard"><button className='btn'>Admin Dashboard</button></Link>
//           </li>
//           <li>
//             <Link to="/MentorProfile">Mentor Profile</Link>
//           </li>
//           <li>
//             <Link to="/MenteeProfile">Mentee Profile</Link>
//           </li>
//           <li>
//             <Link to="/AdminDashboard">Admin Dashboard</Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
