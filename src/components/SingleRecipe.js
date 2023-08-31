import React from "react";
import { Card } from "react-bootstrap"; // Import Bootstrap's Card component

function SingleRecipe({ recipe }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>Course: {recipe.dishTypes}</Card.Text>
        <Card.Text>Ratings: {recipe.spoonacularScore}</Card.Text>
        <Card.Text>Preparation Time: {recipe.readyInMinutes} minutes</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleRecipe;
