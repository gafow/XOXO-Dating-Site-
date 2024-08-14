import React, { useState, useEffect } from 'react';
import './App.css'; 
import'./components/UserCollection.js';
import './components/Sort.js';
const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState('');
  const [relationshipFilter, setRelationshipFilter] = useState('');

  // Fetch data from db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/'); // Fetch data from public folder
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Apply filters
  useEffect(() => {
    const applyFilters = () => {
      const filtered = users.filter(user => {
        return (
          (genderFilter === '' || user.gender === genderFilter) &&
          (relationshipFilter === '' || user.relationshipStatus === relationshipFilter)
        );
      });
      setFilteredUsers(filtered);
    };

    applyFilters();
  }, [genderFilter, relationshipFilter, users]);

  return (
    <div className="App">
      <h1>User Collection</h1>
      
      <div className="filters">
        <label htmlFor="genderFilter">Filter by Gender:</label>
        <select
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="relationshipFilter">Filter by Relationship Status:</label>
        <select
          id="relationshipFilter"
          value={relationshipFilter}
          onChange={(e) => setRelationshipFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="single">Single</option>
          <option value="in a relationship">In a relationship</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="user-item">
              {user.name} - {user.gender} - {user.relationshipStatus}
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default App;
