import React, { useState, useEffect } from "react";
import axios from "axios";
import PopularRecipesList from "./PopularRecipesList";
import VeganVegetarianList from "./VeganVegetarianList";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import CuisinesList from "./CuisinesList";
// import config from "../config/config";
import { useNavigate } from "react-router-dom";

function RecipeList() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [veganVegetarianRecipes, setVeganVegetarianRecipes] = useState([]);
  const [ketogenicRecipes, setKetogenicRecipes] = useState([]);
  const [dessertRecipes, setDessertRecipes] = useState([]); // New state for dessert recipes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const popularApiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&sort=popularity&number=10&addRecipeInformation=true`;
    const veganVegetarianApiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegan,vegetarian&number=10&addRecipeInformation=true`;
    const ketogenicApiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=ketogenic&number=10&addRecipeInformation=true`;
    const dessertApiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=dessert&number=10&addRecipeInformation=true`; // API endpoint for dessert recipes

    axios
      .all([
        axios.get(popularApiUrl),
        axios.get(veganVegetarianApiUrl),
        axios.get(ketogenicApiUrl),
        axios.get(dessertApiUrl), // Fetch dessert recipes
      ])
      .then((responses) => {
        setPopularRecipes(responses[0].data.results);
        setVeganVegetarianRecipes(responses[1].data.results);
        setKetogenicRecipes(responses[2].data.results);
        setDessertRecipes(responses[3].data.results); // Set dessert recipes from the fourth response
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    setError(null);

    const apiKey = process.env.REACT_APP_API_KEY;
    const searchApiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=16&addRecipeInformation=true`;

    axios
      .get(searchApiUrl)
      .then((response) => {
        setSearchResults(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const history = useNavigate();

  const navigateToCuisine = (cuisineName) => {
    history(`/cuisine/${cuisineName}`);
  };

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="recipe-list">
      <SearchBar onSearch={handleSearch} />
      <div className="container px-1">
        <div className="row">
          <div>
            <SearchResults recipes={searchResults} />
          </div>
          <div>
            <CuisinesList onCuisineClick={navigateToCuisine} />{" "}
          </div>
          <div>
            <PopularRecipesList recipes={popularRecipes} />
          </div>
          <div>
            <h2>Vegan and Vegetarian</h2>
            <VeganVegetarianList recipes={veganVegetarianRecipes} />
          </div>
          <div>
            <h2>Ketogenic</h2>
            <VeganVegetarianList recipes={ketogenicRecipes} />
          </div>
          <div>
            <h2>Desserts</h2>
            <VeganVegetarianList recipes={dessertRecipes} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
