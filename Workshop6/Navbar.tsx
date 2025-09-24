import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">MyWebsite</div>

        <ul className="menu-desktop">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="menu-mobile">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;