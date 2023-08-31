// components/Cuisine.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/Cuisine.css"; // Import custom CSS

function Cuisine({ name, image }) {
  return (
    <Link to={`/cuisine/${name}`} className="cuisine-card-link">
      <div className="cuisine-card">
        <img src={image} alt={name} className="cuisine-image" />
        <h3 className="cuisine-name">{name}</h3>
      </div>
    </Link>
  );
}

export default Cuisine;
