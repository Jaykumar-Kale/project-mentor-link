import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing Axios for API Calls

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
import MenteeList from "./components/MenteeList"; // Importing MenteeList Component

const App = () => {
  const [mentees, setMentees] = useState([]); // State to store mentees data

  // Fetch mentees from Spring Boot backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/mentees") // Update this URL according to your backend API
      .then((response) => {
        setMentees(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("Error fetching mentees:", error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="min-h-screen p-5 bg-gray-100">
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
          <Route path="/mentees" element={<MenteeList mentees={mentees} />} /> {/* Passing mentees data */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
