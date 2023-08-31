// components/CuisinesList.js
import React, { useState } from "react";
import Cuisine from "./Cuisine";
import "./css/CuisinesList.css"; // Import custom CSS

// Import cuisine images
import africanImage from "./images/african.jpg";
import mexicanImage from "./images/mexican.jpg";
import italianImage from "./images/italian.jpg";
import japaneseImage from "./images/japanese.jpg";
import chineseImage from "./images/chinese.jpg";
import indianImage from "./images/indian.jpg";
import americanImage from "./images/american.jpg";
import greekImage from "./images/greek.jpg";
import frenchImage from "./images/french.jpg";

const cuisinesData = [
  {
    name: "African",
    image: africanImage,
  },
  {
    name: "Mexican",
    image: mexicanImage,
  },
  {
    name: "Italian",
    image: italianImage,
  },
  {
    name: "Japanese",
    image: japaneseImage,
  },
  {
    name: "Chinese",
    image: chineseImage,
  },
  {
    name: "Indian",
    image: indianImage,
  },
  {
    name: "American",
    image: americanImage,
  },
  {
    name: "Greek",
    image: greekImage,
  },
  {
    name: "French",
    image: frenchImage,
  },
  {
    name: "",
    image: null,
  },
  // Add more cuisines and their images here
];

function CuisinesList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 5; // Number of cards to display per slide

  const goLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goRight = () => {
    const maxIndex = Math.max(0, cuisinesData.length - cardsPerSlide);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const sliderStyle = {
    transform: `translateX(-${(currentIndex * 100) / cardsPerSlide}%)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="cuisines-list">
      <div className="slider-container">
        <div className="cuisine-slider" style={sliderStyle}>
          {cuisinesData.map((cuisine, index) => (
            <Cuisine key={index} name={cuisine.name} image={cuisine.image} />
          ))}
        </div>
        <button
          className={`slider-control left ${
            currentIndex === 0 ? "disabled" : ""
          }`}
          onClick={goLeft}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={`slider-control right ${
            currentIndex >= cuisinesData.length - cardsPerSlide
              ? "disabled"
              : ""
          }`}
          onClick={goRight}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default CuisinesList;
