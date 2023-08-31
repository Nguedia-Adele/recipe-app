// SearchResults.js
import React from "react";
import SearchResultsCard from "./SearchResultsCard";

function SearchResults({ recipes }) {
  // Only display "No results found" when there are no search results
  if (!recipes || recipes.length === 0) {
    return null; // Return null to hide the message
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <SearchResultsCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
