import React, { useState } from "react";
import VeganVegetarian from "./VeganVegetarian";
import "./css/VeganVegetarianList.css"; // Import the CSS file

function VeganVegetarianList({ recipes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < recipes.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="vegan-vegetarian-list">
      <div className="slider-container">
        <div className="slider">
          {recipes.slice(currentIndex, currentIndex + 4).map((recipe) => (
            <VeganVegetarian
              key={recipe.id}
              recipe={recipe}
              dietLabel="Vegan"
            />
          ))}
        </div>
        <button
          className={`slider-control prev ${
            currentIndex === 0 ? "disabled" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={`slider-control next ${
            currentIndex >= recipes.length - 4 ? "disabled" : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex >= recipes.length - 4}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="slider-indicators">
          {Array.from({ length: Math.ceil(recipes.length / 4) }).map(
            (_, index) => (
              <span
                key={index}
                className={currentIndex / 4 === index ? "active" : ""}
                onClick={() => setCurrentIndex(index * 4)}
              ></span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default VeganVegetarianList;
