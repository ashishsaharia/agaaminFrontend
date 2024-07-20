import React, { useState } from 'react';
import hamburgerlogo from '../../assets/agaaminImages/logo.png';
import './hamburger.css';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container">
      <img
        className="hamburger"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiFa3WQHCMguhFIBq58BxeyS5-HgpRnP3Yg&s"
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
          </ul>
        </div>
      )}
    </div>
  );
}
