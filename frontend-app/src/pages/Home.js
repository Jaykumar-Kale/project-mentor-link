/*
  Task:
  1. Project name;
  2. Dsc:
  3. 2 Buttons  ( Register and Login)
*/

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-text">
        <h1>Welcome to Mentor-Link </h1>
        <p>
          Find the best mentors to guide you, Mentor-Link Provids you the Best
          fit Mentor For You According to Your Interset. You can Choose Any
          Mentor According To Your Tech-Stack or Skills. Mentor's Plays Very
          Crucial Role In Our Carrer So Choose The Right Mentor With
          Mentor-Link.
        </p>

        <button className="btn"> Register </button>
        <button className="btn"> Login </button>
      </div>
    </div>
  );
};

export default Home;
