import { observer } from "mobx-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipeStore from "../stores/recipeStore";
import AddRecipeModal from "./AddRecipeModal";
import Card from "./Card";

const RecipeList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className="main-page">
      {/* header */}
      <div>
        <h3>recipes</h3>
        <button onClick={handleOpen}>Add a new Recipe</button>
      </div>
      {/* content */}
      <div className="content">
        {recipeStore.recipes.map((recipe) => (
          <Link key={recipe._id} to={`/recipes/${recipe.slug}`}>
            <Card name={recipe.name} image={recipe.image} />
          </Link>
        ))}
      </div>
      {/* footer */}
      <AddRecipeModal isOpen={isOpen} handleClose={handleClose} />;
    </div>
  );
};

export default observer(RecipeList);
