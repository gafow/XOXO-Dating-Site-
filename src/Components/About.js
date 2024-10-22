import React from 'react';
import Navbar from './NavBar';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <Navbar />
     
      <div className="about-content">
        <h2>About Us</h2>
        <img 
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-dating-illustration-download-in-svg-png-gif-file-formats--messenger-logo-like-social-networking-romantic-communication-valentines-day-pack-valentine-illustrations-4073259.png?f=webp"
          alt="About Swipe"
          className="about-image"
        />
        <p>
          Welcome to <span className="brand">Swipe</span>, a modern dating platform designed to bring people together. Whether you’re looking for a meaningful connection or simply to meet new people, <span className="brand">Swipe</span> offers a space where you can build relationships easily.
        </p>
        <p>
          With advanced filters and user-friendly features, we aim to make online dating accessible and enjoyable for everyone. Our mission is simple: <em>help you find love, connection, and friendship</em> in a comfortable, interactive space.
        </p>
      </div>
    </div>
  );
}

export default About;
