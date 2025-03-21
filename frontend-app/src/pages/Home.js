/*
  Home Contain Start --> 2 pages
    1.Login 
    2. Registration.
*/

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Empower Your Journey with the Right Mentor</h1>
          <p>Connect with industry experts to accelerate your career growth.</p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Register Now</button>
            <button className="btn secondary-btn">Login</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Mentor-Link?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Personalized Matching</h3>
            <p>Get paired with mentors that align with your goals.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Scheduling</h3>
            <p>Book sessions at times that suit your availability.</p>
          </div>
          <div className="feature-item">
            <h3>Resource Library</h3>
            <p>Access a curated collection of learning materials.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          "Mentor-Link transformed my career trajectory!" –{" "}
          <cite>A Satisfied Mentee</cite>
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="social-media">
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>&copy; 2025 Mentor-Link. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

// /*
//   Task:
//   1. Project name;
//   2. Dsc:
//   3. 2 Buttons  ( Register and Login)
// */

// import React from "react";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home container">
//       <div className="home-text">
//         <h1>Welcome to Mentor-Link </h1>
//         <p>
//           Find the best mentors to guide you, Mentor-Link Provids you the Best
//           fit Mentor For You According to Your Interset. You can Choose Any
//           Mentor According To Your Tech-Stack or Skills. Mentor's Plays Very
//           Crucial Role In Our Carrer So Choose The Right Mentor With
//           Mentor-Link.
//         </p>

//         <button className="btn"> Register </button>
//         <button className="btn"> Login </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
