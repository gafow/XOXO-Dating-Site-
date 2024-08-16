import React from 'react';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className="user-item">
            {user.name} - {user.gender} - {user.relationshipStatus}
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UserList;