import React from "react";
import { Link } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Github, Linkedin } from "react-bootstrap-icons";

if (typeof window !== `undefined`) {
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    console.log("scrolling");
    let currentScrollPos = global.pageYOffset;
    if (prevScrollPos > currentScrollPos || currentScrollPos <= 60) {
      document.getElementsByClassName("navbar")[0].style.top = "0";
    } else {
      document.getElementsByClassName("navbar")[0].style.top = "-60px";
    }
    prevScrollPos = currentScrollPos;
  };
}

const Navigation = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ transition: "top 0.5s" }}
    >
      <Container>
        <Link to="/" className="navbar-brand text-light">
          Jan Van den Enden
        </Link>
        <Nav className="ml-auto flex-row">
          <a
            href="https://github.com/janvandenenden"
            target="_blank"
            rel="noreferrer"
            className="nav-link ml-2"
          >
            <Github color="#ffffff" size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jan-van-den-enden-410b7820/"
            target="_blank"
            rel="noreferrer"
            className="nav-link ml-2"
          >
            <Linkedin color="#ffffff" size={28} />
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;