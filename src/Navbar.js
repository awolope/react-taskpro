import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

const Navbar = ({ user }) => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">
        TaskPro
      </BootstrapNavbar.Brand>
      <span className="navbar-text">Hi, {user.firstName}</span>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          {user ? (
            <>
              <Nav.Link as={Link} to="/tasks">
                Tasks
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
