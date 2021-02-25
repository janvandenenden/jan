import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-light py-3">
      © {new Date().getFullYear()} by
      {` `}
      <a href="https://www.janvandenenden.com" className="text-light">
        Jan Van den Enden
      </a>
    </footer>
  );
};

export default Footer;
