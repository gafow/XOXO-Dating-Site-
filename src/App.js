// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Form from './components/Form';
import UserCollection from './components/UserCollection';
import About from './components/About';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('age');
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fetch users from the local server
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const addUser = (user) => {
    if (!selectedUsers.some((u) => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const removeUser = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/users"
            element={
              <UserCollection
                users={users}
                addUser={addUser}
                removeUser={removeUser}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                selectedUsers={selectedUsers}
              />
            }
          />
          <Route
            path="/form"
            element={<Form users={users} setUsers={setUsers} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;