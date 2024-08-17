// UserCollection.js
import React, { useState } from "react";
import SortBar from "./SortBar";
import UserList from "./UserList";

function UserCollection({
  users,
  addUser,
  removeUser,
  sortBy,
  onSortChange,
  selectedUsers,
}) {
  const [filter, setFilter] = useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  const filteredUsers = users.filter(
    (user) => filter.length === 0 || filter.includes(user.status)
  );

  const sortedUsers = filteredUsers.slice().sort((a, b) => {
    if (sortBy === "age") {
      return a.age - b.age;
    } else if (sortBy === "username") {
      return a.username.localeCompare(b.username);
    }
    return 0;
  });

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