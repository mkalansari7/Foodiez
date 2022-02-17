import React from "react";
import recipeStore from "../stores/recipeStore";
import Card from "./Card";

const RecipeList = () => {
  return (
    <div className="main-page">
      {/* header */}
      <h2>recipes</h2>
      {/* content */}

      <div className="content">
        {recipeStore.recipes.map((recipe) => (
          <Card name={recipe.name} image={recipe.image} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
};

export default RecipeList;
