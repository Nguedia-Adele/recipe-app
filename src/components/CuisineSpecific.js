// CuisineSpecific.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PopularRecipe from "./PopularRecipe"; // Import the PopularRecipe component
import config from "../config/config";
import { useParams, Link } from "react-router-dom";
import "./css/CuisineSpecific.css"; // Import custom CSS

function CuisineSpecific() {
  const { cuisineName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = config.apiKey;
    const cuisineApiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisineName}&number=20&addRecipeInformation=true&diet=vegan,vegetarian&intolerances=lactose&excludeIngredients=gluten`;

    axios
      .get(cuisineApiUrl)
      .then((response) => {
        setRecipes(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [cuisineName]);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {cuisineName} Recipes
          </li>
        </ol>
      </nav>
      {/* <h2>{cuisineName} Recipes</h2> */}
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <PopularRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default CuisineSpecific;
