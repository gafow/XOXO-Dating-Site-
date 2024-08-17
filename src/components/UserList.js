// UserList.js
import React from "react";
import '../App.css';

function UserList({ user, onClick, onDelete, isSelected }) {
  return (
    <div 
      className={`p-4  bg-pink-200 border rounded-lg ${
        isSelected ? "border-green-500" : "border-gray-300"
      }`}
      onClick={() => onClick(user)}
    >
      <img
        src={user.userprofilepicture}
        alt={`${user.name}'s profile`}
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
      <h3 className="font-bold text-lg mb-2">{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Status: {user.status}</p>
      <p>Username: {user.username}</p>
      <p>City: {user.city}</p>
      <p>Phone: {user.phone}</p>
      <p>Interests: {user.interests}</p>
      <button
        className="text-red-500 mt-2"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(user);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default UserList;