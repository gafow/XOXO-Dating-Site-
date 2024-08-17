import React from 'react';
import UserList from './UserList'; // Import the UserList component
import SortBar from './SortBar'; // Import the SortBar component

function UserCollection({ users, addUser, removeUser, sortBy, onSortChange, selectedUsers }) {
  const [filter, setFilter] = React.useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  // Filter and sort users
  const filteredUsers = users.filter((user) => filter.length === 0 || filter.includes(user.user_status));
  const sortedUsers = filteredUsers.slice().sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <SortBar sortBy={sortBy} onSortChange={onSortChange} />
      <div className="flex flex-wrap gap-4 mb-4">
        {["Single", "In a Relationship", "Divorced", "Widowed"].map((status) => (
          <label key={status} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={status}
              checked={filter.includes(status)}
              onChange={handleFilterChange}
              className="form-checkbox"
            />
            <span>{status}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedUsers.map((user) => (
          <UserList
            key={user.id}
            user={user}
            onClick={addUser}
            onDelete={removeUser}
            isSelected={selectedUsers.some((u) => u.id === user.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCollection;