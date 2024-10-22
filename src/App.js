import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './Components/About';
import Navbar from './Components/NavBar';
import UserProfile from './Components/UserProfile'; 
import SignUp from './Components/SignUp'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/signup" element={<SignUp />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
