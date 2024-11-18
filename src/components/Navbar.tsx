import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <a href="/" className="logo-link">
              <Code2 className="logo-icon" />
              <span className="logo-text">NIDO</span>
            </a>
          </div>

          <div className="nav-links">
            <a href="#services" className="nav-link" onClick={handleLinkClick}>
              Diensten
            </a>
            <a href="#process" className="nav-link" onClick={handleLinkClick}>
              Werkwijze
            </a>
            <a href="#portfolio" className="nav-link" onClick={handleLinkClick}>
              Portfolio
            </a>
            <a
              href="#contact"
              className="nav-link contact-button"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>

          <button
            className="mobile-menu-button"
            onClick={handleMenuClick}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "" : "hidden"}`}>
        <div className="mobile-menu-links">
          <a href="#services" className="mobile-link" onClick={handleLinkClick}>
            Diensten
          </a>
          <a href="#process" className="mobile-link" onClick={handleLinkClick}>
            Werkwijze
          </a>
          <a
            href="#portfolio"
            className="mobile-link"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a href="#contact" className="mobile-link" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
