import React from "react";
import { Link } from "react-router-dom";
import "./css/PopularRecipe.css";

function PopularRecipe({ recipe }) {
  // Calculate hours and minutes
  const hours = Math.floor(recipe.readyInMinutes / 60);
  const minutes = recipe.readyInMinutes % 60;

  // Prepare the time string
  const timeString =
    hours > 0 ? `${hours} hrs ${minutes} mins` : `${minutes} mins`;

  return (
    <div className="popular-recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} />
        <div className="labels">
          {recipe.vegan && <span className="label vegan">Vegan</span>}
          {recipe.glutenFree && (
            <span className="label gluten">Gluten-Free</span>
          )}
          {recipe.dairyFree && (
            <span className="label lactose">Lactose-Free</span>
          )}
        </div>
        <div className="recipe-details-section">
          <h5 className="recipe-title">{recipe.title}</h5>
          <p className="recipe-details">
            <i className="fas fa-clock icon"></i> {timeString}
          </p>
          <p className="recipe-details small">
            Source:{" "}
            {recipe.creditsText && (
              <a
                className="author-link"
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {recipe.creditsText}
              </a>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PopularRecipe;
