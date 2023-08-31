import React from "react";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import SearchResults from "./SearchResults"; // Import the SearchResults component
import CuisineSpecific from "./CuisineSpecific";
import CuisinesList from "./CuisinesList"; // Import the CuisinesList component
import NavigationBar from "./NavigationBar";

/* import CuisinePage from "./CuisinePage"; // Create this component
import MealCoursePage from "./MealCoursePage"; // Create this component
import MealPlan from "./MealPlan"; // Create this component */

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/globalStyles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/cuisine/:cuisineName" element={<CuisineSpecific />} />
        <Route path="/" element={<CuisinesList />} />
      </Routes>
    </Router>
  );
}

export default App;
