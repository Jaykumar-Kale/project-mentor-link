
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
  );
}

export default App;
