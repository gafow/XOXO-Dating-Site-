import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav className="navbar">
      <button><Link to="/">Home</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/users">Users</Link></button>
      <button><Link to="/form">Sign Up</Link></button>
    </nav>
  );
}

export default NavBar;