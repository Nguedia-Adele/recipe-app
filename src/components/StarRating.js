// StarRating.js
import React from "react";
import "./css/StarRating.css";

const StarRating = ({ healthScore }) => {
  // Calculate the rating on a scale from 1 to 5
  const rating = (healthScore / 20).toFixed(1);

  console.log(rating);

  // Convert the rating to a number
  const ratingNumber = parseFloat(rating);
  console.log(ratingNumber);

  // Create an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= ratingNumber) {
      return <i key={index} className="fas fa-star filled"></i>;
    } else if (index + 0.5 === ratingNumber) {
      return <i key={index} className="fas fa-star-half-alt filled"></i>;
    } else {
      return <i key={index} className="far fa-star"></i>;
    }
  });

  return (
    <div className="star-rating">
      <div className="stars">{stars}</div>
      <div className="rating-number">{rating}</div>
    </div>
  );
};

export default StarRating;
