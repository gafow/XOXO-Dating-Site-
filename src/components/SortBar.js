// SortBar.js
import React from "react";

function SortBar({ sortBy, onSortChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="form-select"
      >
        <option value="age">Age</option>
        <option value="username">Username</option>
      </select>
    </div>
  );
}

export default SortBar;