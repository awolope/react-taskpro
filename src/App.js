import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./Hompeage";
import SignUp from "./Signup";
import Login from "./Login";
import TaskPage from "./TaskPage";
import "./App.css";

const AppContent = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/" && (
        <Navbar user={user} />
      )}

      <div className="content">
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
