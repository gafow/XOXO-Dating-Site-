import React, { useState, useEffect } from 'react';
import Sort from './Sort'; // Ensure this path matches where your SortBar component is located
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Fetch data from db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/'); // Fetch data from public folder
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Apply filter and sorting
  useEffect(() => {
    let updatedUsers = [...users];
    
    // Apply filtering
    if (filterBy) {
      updatedUsers = updatedUsers.filter(user => user.relationshipStatus === filterBy);
    }

    // Apply sorting
    if (sortBy) {
      updatedUsers = updatedUsers.filter(user => user.gender === sortBy);
    }

    setFilteredUsers(updatedUsers);
  }, [filterBy, sortBy, users]);

  return (
    <div className="user-list-container">
      <Sort
        filterBy={filterBy}
        sortBy={sortBy}
        onFilterChange={setFilterBy}
        onSortChange={setSortBy}
      />
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

export default UserList;
