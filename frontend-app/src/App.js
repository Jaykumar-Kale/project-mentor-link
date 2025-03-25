

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// Importing Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MenteeProfile from "./pages/MenteeProfile";
import MentorProfile from "./pages/MentorProfile";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Importing Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mentorprofile" element={<MentorProfile />} />
          <Route path="/menteeprofile" element={<MenteeProfile />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;







// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


// // Importing Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import MenteeProfile from "./pages/MenteeProfile";
// import MentorProfile from "./pages/MentorProfile";
// import AdminDashboard from "./pages/AdminDashboard";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// // Importing Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/mentorprofile" element={<MentorProfile />} />
//           <Route path="/menteeprofile" element={<MenteeProfile />} />
//           <Route path="/admindashboard" element={<AdminDashboard />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
