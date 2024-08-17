import React, { useState, useEffect } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getFormattedDate = () => {
    return currentTime.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getFormattedTime = () => {
    return currentTime.toLocaleTimeString();
  };

  return (
    <div className="homepage">
      <div className="intro-section">
        <h1 className="animated-heading">Welcome to TaskPro</h1>
        <p className="subheading">Your ultimate task management solution</p>
        <div className="date-time">
          <p className="date">{getFormattedDate()}</p>
          <p className="time">{getFormattedTime()}</p>
        </div>
        <Link to="/signup" className="get-started-btn">
          Get Started
        </Link>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Organize your tasks efficiently</li>
          <li>Track progress in real-time</li>
          <li>Seamless user experience</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>About TaskPro</h2>
        <p>
          TaskPro is a cutting-edge task management application designed to help
          you stay organized and productive. Whether you're managing personal
          tasks or professional projects, TaskPro has the tools you need to
          succeed.
        </p>
      </div>
      <div className="footer">
        <p>© 2024 TaskPro. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
