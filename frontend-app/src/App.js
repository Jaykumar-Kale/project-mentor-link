
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import MenteeProfile from "./pages/MenteeProfile";
import MentorProfile from "./pages/MentorProfile";
import AdminDashboard from "./pages/AdminDashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Router>

      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentorprofile" element={<MentorProfile />} />
        <Route path="/menteeprofile" element={<MenteeProfile />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import Components 
// import Navbar from "./components/Navbar/Navbar"; 
// import Footer from "./components/Footer/Footer";

// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Register from "./Pages/Register/Register";
// import MenteeProfile from "./Pages/MenteeProfile/MenteeProfile";
// import MentorProfile from "./Pages/MentorProfile/MentorProfile";
// import AdminDashboard from "./Pages/adminDashboard/AdminDashboard";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/mentorprofile" element={<MentorProfile />} />
//         <Route path="/menteeprofile" element={<MenteeProfile />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

