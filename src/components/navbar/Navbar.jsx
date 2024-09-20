import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`main-navdiv ${isOpen ? "open" : ""}`}>
      {/* <Link to="/" onClick={closeNavbar}> */}
        <img src={Logo} alt="" className="logo" />
      {/* </Link> */}
      <input
        type="checkbox"
        name=""
        id="nav-toggler"
        className="fas fa-bars"
        checked={isOpen}
        onChange={handleToggle}
      />
      <nav className="navbar">
        <a data-text="home" onClick={closeNavbar}>
          Home
        </a>
        <a data-text="Community" onClick={closeNavbar}>
          Community
        </a>
        <a data-text="Marketplace" onClick={closeNavbar}>
         Marketplace
        </a>
        <a data-text="Education" onClick={closeNavbar}>
          Education
        </a>
        <div className="background-image"></div>
        <div className="social">
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;