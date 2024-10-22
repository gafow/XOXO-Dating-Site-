import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="odin">
      <nav className="navbar">
        <div className="navbar-logo">
          <h2 className="bts-shine">Swipe</h2>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <hr />
          <li><Link to="/about">About</Link></li>
          <hr />
          <li><Link to="/userprofile">Users</Link></li> 
          <hr />
          <li><Link to="/signup">Sign Up</Link></li> 
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
