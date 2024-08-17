// SortBar.js 
import React from 'react';


function SortBar({ filterBy, sortBy, onFilterChange, onSortChange }) {
  const [mode, setMode] = useState('filter'); // Toggle between 'filter' and 'sort'

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      {/* Mode Toggle */}
      <div className="mb-4">
        <button
          className={`py-2 px-4 rounded-md ${mode === 'filter' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('filter')}
        >
          Filter
        </button>
        <button
          className={`py-2 px-4 rounded-md ${mode === 'sort' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('sort')}
        >
          Sort
        </button>
      </div>
 
    Filter Buttons
      {mode === 'filter' && (
        <div className="flex justify-center space-x-4">
          <button
            className={`py-2 px-4 rounded-md ${filterBy === 'single' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onFilterChange('single')}
          >Filter by Single
          </button>
          <button
            className={`py-2 px-4 rounded-md ${filterBy === 'in a Relationship' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onFilterChange('in a Relationship')}
          >
            Filter by In a Relationship
          </button>
          <button
            className={`py-2 px-4 rounded-md ${filterBy === 'divorced' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onFilterChange('divorced')}
          >
            Filter by Divorced
          </button>
          <button
            className={`py-2 px-4 rounded-md ${filterBy === 'widowed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onFilterChange('widowed')}
          >
            Filter by Widowed
          </button>
        </div>
      )}

       Sort Buttons 
      {mode === 'sort' && (
        <div className="flex justify-center space-x-4">
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
      )}
    </div>
  );
}

export default SortBar;