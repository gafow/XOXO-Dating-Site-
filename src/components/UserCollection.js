import React from "react";
import SortBar from "./Sort";

function UserCollection({users, enlistUser, deleteUser, sortBy, enlistedUsers}) {
    const [filter, setFilter] = React.useState([]);

    const handleFilterChange = (e) => {
        const{value, checked} = e.target;
        setFilter((prev) => 
        checked ? [...prev, value] : prev.filter((f) => f!==value)
    );
 };
    
const filteredUsers = users.filter(
    (user) => filter.length === 0 || filter.includes(user.user_status)
);
const sortedUsers = filteredUsers.slice().sort((a, b) => b[sortBy] - a[sortBy]);

return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <SortBar sortBy={sortBy}  />
        <div className="flex flex-wrap gap-4 mb-4">
            {["Single", "In a Relationship", "Divorced", "Widowed"].map((status) => (
            <label key={status} className="flex items-center space-x-2">
                <input
                type="checkbox"
                value={status}
                checked={filter.includes(status)}
                onChange={handleFilterChange}
                className="form-checkbox" />
                <span>{status}</span>
            </label>
            ))}
        </div>
        
            <div className="mt-4">
        {sortedUsers.length > 0 ? (
          <ul className="space-y-2">
            {sortedUsers.map((user) => (
              <li key={user.id} className="p-2 border rounded flex items-center space-x-4">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.user_status}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
           
  );
}

export default UserCollection;




