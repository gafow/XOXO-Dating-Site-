// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page of XOXO Dating App</h1>
      <p>This is the starting point of your application.</p>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/form">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;