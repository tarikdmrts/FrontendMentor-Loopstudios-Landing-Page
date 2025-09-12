import { React, useState } from "react";
import loopstudiosLogo from "../../images/logo.svg";
import hamburgerLogo from "../../images/icon-hamburger.svg";
import closeLogo from "../../images/icon-close.svg";
import "./navbar.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <img
          src={loopstudiosLogo}
          alt="Loopstudios Logo"
          className="navbar__logo"
        />
      </div>
      <button
        onClick={toggleMenu}
        className="navbar__toggle"
        aria-label="Toggle menu"
      >
        <img src={hamburgerLogo} alt="Menu Icon" />
      </button>
      <div className={`navbar__menu__overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar__close">
          <div className="navbar__header">
            <img
              src={loopstudiosLogo}
              alt="Loopstudios Logo"
              className="navbar__logo"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="navbar__close-btn"
            aria-label="Close menu"
          >
            <img src={closeLogo} alt="Close Icon" />
          </button>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">About</li>
          <li className="navbar__item">Careers</li>
          <li className="navbar__item">Events</li>
          <li className="navbar__item">Products</li>
          <li className="navbar__item">Support</li>
        </ul>
      </div>
    </nav>
  );
}
