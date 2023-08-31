import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";
import "./css/NavigationBar.css";
import Logo from "./images/Logo.png";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-pills">
        <Link to="/meal-course/breakfast" className="nav-pill">
          Breakfast
        </Link>
        <Link to="/meal-course/dessert" className="nav-pill">
          Desserts
        </Link>
        <Link to="/meal-course/appetizer" className="nav-pill">
          Appetizers
        </Link>
        <Link to="/meal-course/side-dish" className="nav-pill">
          Side Dishes
        </Link>
        <Link to="/meal-course/salad" className="nav-pill">
          Salads
        </Link>
        <Link to="/meal-course/drink" className="nav-pill">
          Drinks
        </Link>
        <Link to="/meal-plan" className="nav-pill">
          Meal Plan
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
