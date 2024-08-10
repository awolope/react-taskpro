import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage.css"; // Import custom CSS if needed

const HomePage = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString(); // Format date and time
  };

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <header className="hero-section text-center py-5">
        <h1 className="display-4">Welcome to Task Manager</h1>
        <p className="lead">Your ultimate task management solution</p>
        <Button variant="primary">
          <Link to="/signup">Get Started</Link>
        </Button>
      </header>

      {/* Features Section */}
      <section className="features-section text-center py-5">
        <h2 className="display-5">Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-card p-3">
              <h3>Task Management</h3>
              <p>Organize and manage your tasks efficiently.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-3">
              <h3>Project Tracking</h3>
              <p>Track your projects and stay on top of deadlines.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-3">
              <h3>Collaboration</h3>
              <p>Collaborate with your team seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section text-center py-5">
        <h2>Ready to Get Started?</h2>
        <p>Join us today and take control of your tasks!</p>
        <Button variant="primary" as={Link} to="/signup">
          Sign Up Now
        </Button>
      </section>

      {/* Date and Time Section */}
      <section className="date-time-section text-center py-5">
        <h2>Current Date and Time</h2>
        <p className="lead">{formatDateTime(currentDateTime)}</p>
      </section>
    </div>
  );
};

export default HomePage;
