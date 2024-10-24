import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  let location = useLocation();

  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Hritik Portfolio</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        
          <li className={`nav-item ${location.pathname === "/About" ? "active" : ""}`}>
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/Education" ? "active" : ""}`}>
            <Link className="nav-link" to="/Education">Education</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/Projects" ? "active" : ""}`}>
            <Link className="nav-link" to="/Projects">Projects</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/Certification" ? "active" : ""}`}>
            <Link className="nav-link" to="/Certification">Certifications</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/Contact" ? "active" : ""}`}>
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
