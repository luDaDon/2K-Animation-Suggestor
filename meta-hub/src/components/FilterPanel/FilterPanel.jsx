// src/components/FilterPanel.jsx
import './style.css';

function FilterPanel() {
  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800">Filter by Build</h2>

      <div class = "filter-panel">
        <label className="block text-lg font-medium text-gray-700">Position </label>
        <select className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" id = "select_position">
          <option value="Any">Any</option>
          <option value="PG">Point Guard</option>
          <option value="SG">Shooting Guard</option>
          <option value="SF">Small Forward</option>
          <option value="PF">Power Forward</option>
          <option value="C">Center</option>
        </select>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700" class = 'dropdown-text'>Height (inches) </label>
        <input
          type="number"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="e.g. 78"
          class = "filter-dropdown-option"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700" class = 'dropdown-text'>3PT Rating </label>
        <input
          type="number"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          class = "filter-dropdown-option"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700" class = 'dropdown-text'>Ball Handle </label>
        <input
          type="number"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          class = "filter-dropdown-option"
        />
      </div>

      <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id = "apply_filters_btn">
        Apply Filters
      </button>
    </div>
  );
}

export default FilterPanel;
