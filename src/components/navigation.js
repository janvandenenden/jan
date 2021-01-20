import React from "react";
import { Link } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand text-light">
          Jan Van den Enden
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/projects" className="nav-link text-light">
              Projects
            </Link>
            <Link to="/about" className="nav-link text-light">
              About
            </Link>
            <Link to="/contact" className="nav-link text-light">
              Contact
            </Link>
            <Link to="/resume" className="nav-link text-light">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
