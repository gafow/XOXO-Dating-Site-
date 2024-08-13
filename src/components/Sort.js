// SortBar.js 
import React from 'react';

function SortBar({ sortBy, onSortChange }) {
  return (
    <div className="p-4 flex justify-center space-x-4">
      <button
        className={`py-2 px-4 rounded-md ${sortBy === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onSortChange('male')}
      >
        Sort by Male
      </button>
      <button
        className={`py-2 px-4 rounded-md ${sortBy === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onSortChange('female')}
      >
       
        Sort by Female
      </button>
    </div>
  );
}

export default SortBar;
