import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import config from "../config/config";
import "./css/Recipe.css"; // Import custom CSS

// Helper function to convert minutes to "hour:minutes" format
const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}hrs:${
    remainingMinutes < 10 ? "0" : ""
  }${remainingMinutes}mins`;
};

function Recipe() {
  // Get the recipeId from the URL
  const { recipeId } = useParams();

  // State variables
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recipe data using the recipeId
    const fetchRecipeData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your Spoonacular API key
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=false&addRecipeInformation=true`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [recipeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Oops, something went wrong: {error}</p>
        {/* <button onClick={fetchRecipeData}>Retry</button> */}
      </div>
    );
  }

  return (
    <div className="recipe-details-container">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {recipe.title}
          </li>
        </ol>
      </nav>

      {/* Author, date, image, preparation time, cooking time, servings */}
      <h1>{recipe.title}</h1>
      <p>Author: {recipe.sourceName}</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <img src={recipe.image} alt={recipe.title} />
      <p>Preparation Time: {formatTime(recipe.preparationMinutes)}</p>
      <p>Cooking Time: {formatTime(recipe.cookingMinutes)}</p>
      <p>Servings: {recipe.servings}</p>

      {/* Ingredients */}
      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>

      {/* Nutritional Value */}
      <h2>Nutritional Value</h2>
      {recipe.nutrition && recipe.nutrition.nutrients.length > 0 ? (
        <p>
          Calories: {recipe.nutrition.nutrients[0].amount}{" "}
          {recipe.nutrition.nutrients[0].unit}
        </p>
      ) : (
        <p>Nutritional information not available.</p>
      )}
      {/* Add more nutritional information as needed */}

      {/* Cooking Instructions */}
      <h2>Instructions</h2>
      {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 ? (
        <ol>
          {recipe.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ol>
      ) : (
        <p>Instructions not available for this recipe.</p>
      )}
    </div>
  );
}

export default Recipe;
