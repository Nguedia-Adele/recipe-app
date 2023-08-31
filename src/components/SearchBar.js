import React, { useState } from "react";
import "./css/SearchBar.css"; // Import the CSS file
import "./js/SearchBarScript.js"; // Import the js file

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">
          <i className="fas fa-search me-2"></i>
        </button>
        <button type="button" className="filter-icon">
          <i className="fas fa-sliders-h"></i>
        </button>
        <button type="button" className="clear-icon">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
