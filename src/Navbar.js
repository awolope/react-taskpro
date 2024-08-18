import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar = ({ user }) => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          TaskPro
        </BootstrapNavbar.Brand>
        {user && <span className="navbar-text ml-2">Hi, {user.firstName}</span>}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home" className="text-center mx-auto">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/task" className="text-center mx-auto">
              Tasks
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-center mx-auto">
              Logout
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
