import React from "react";
import "./navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="main">
      <ul>
        <img className="picturetopnavbar" src="./images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="picto"></img>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>Home</li>
        </Link>
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <li>About</li>
        </Link>
        <Link to="/Project" style={{ textDecoration: 'none' }}>
          <li>Project</li>
        </Link>
        <Link to="/Services" style={{ textDecoration: 'none' }}>
          <li>Services</li>
        </Link>
        <Link to="/Blog" style={{ textDecoration: 'none' }}>
          <li>Blog</li>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <li>Contact</li>
        </Link>
        <button className="buttonnavbar">Enquiry Now</button>
      </ul>
      
    </div>
  );
};

export default Navbar;
