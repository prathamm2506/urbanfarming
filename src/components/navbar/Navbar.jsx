import React, { useState } from "react";
import "./Navbar.css";
// import Logo from "../../assets/Logo.png";
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
        {/* <img src={Logo} alt="" className="logo" /> */}
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
        <a data-text="se03" onClick={closeNavbar}>
          se03
        </a>
        <a data-text="se03 max" onClick={closeNavbar}>
         se03 max
        </a>
        <a data-text="se03 lite" onClick={closeNavbar}>
          se03 lite
        </a>
        <a data-text="compare" onClick={closeNavbar}>
          compare
        </a>
        <a data-text="about" onClick={closeNavbar}>
         about
        </a>
        <a data-text="contact" onClick={closeNavbar}>
          contact
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