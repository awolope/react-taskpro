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
import "./App.css"; // For custom CSS

const AppContent = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const shouldShowNavbar = !["/login", "/signup"].includes(location.pathname);
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
      {shouldShowNavbar && <Navbar user={user} />}

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/signup" element={<SignUp />} />
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
