import React from "react";

import "../Styles/Category.css";
import { Link, Route } from "react-router-dom";
import FirstQuestion from "./FirstQuestion";
import Card from "./Card";
import recipeStore from "../stores/recipeStore";
const Home = () => {
  return (
    <div className="main-page">
      {/* header */}
      <div>
        <h1>Home</h1>
      </div>
      {/* content */}
      <div className="content">
        <Link to={"/categories"}>
          <Card
            name="Categories"
            image="http://localhost:8000/media/1645451334043foodiz%20logo%20(2).jpg"
          />
        </Link>
        <Link to={"/recipes"}>
          <Card
            name="Recipes"
            image="http://localhost:8000/media/1645451334043foodiz%20logo%20(2).jpg"
          />
        </Link>
        <Link to={"/ingredients"}>
          <Card
            name="Ingredients"
            image="http://localhost:8000/media/1645451334043foodiz%20logo%20(2).jpg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
