// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Hompeage";
import SignUpPage from "./Signup";
import LoginPage from "./Login";
import TaskPage from "./TaskPage";
import MyNavbar from "./Navbar"; // Ensure this is the correct path
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  return (
    <Router>
      <div className="container">
        {isLoggedIn && <MyNavbar user={user} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <TaskPage user={user} />
              ) : (
                <SignUpPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <TaskPage user={user} />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/task"
            element={
              isLoggedIn ? (
                <TaskPage user={user} />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
