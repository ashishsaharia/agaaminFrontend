import React, { useState } from 'react';
import hamburgerlogo from '../../assets/agaaminImages/hamburgerlogo.png';
import './hamburger.css';
import { Link } from 'react-router-dom';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container">
      <img
        className="hamburger"
        src={hamburgerlogo}
        alt="hamburger"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/agaaminFrontend/dohSetup">DOH Setup</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}