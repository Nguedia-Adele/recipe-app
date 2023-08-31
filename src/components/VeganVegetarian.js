import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating"; // Import the StarRating component
import "./css/VeganVegetarian.css";

function VeganVegetarian({ recipe }) {
  // Calculate hours and minutes
  const hours = Math.floor(recipe.readyInMinutes / 60);
  const minutes = recipe.readyInMinutes % 60;

  // Prepare the time string
  const timeString =
    hours > 0 ? `${hours} hrs ${minutes} mins` : `${minutes} mins`;
  return (
    <div className="vegan-vegetarian-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} />
        <div className="labels">
          {recipe.glutenFree && (
            <span className="label gluten">Gluten-Free</span>
          )}
          {recipe.dairyFree && (
            <span className="label lactose">Lactose-Free</span>
          )}
        </div>
        <div className="recipe-details-section">
          <h5 className="recipe-title">{recipe.title}</h5>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {/* Use the StarRating component to display the rating */}
            <StarRating healthScore={recipe.healthScore} />
          </div>
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

export default VeganVegetarian;
