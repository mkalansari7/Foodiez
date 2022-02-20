import { observer } from "mobx-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipeStore from "../stores/recipeStore";
import AddRecipeModal from "./AddRecipeModal";
import Card from "./Card";
import DeleteRecipeModal from "./DeleteRecipeModal";
import UpdateRecipeModal from "./UpdateRecipeModal";

const RecipeList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleUpdateClose = () => setIsUpdateOpen(false);
  const handleUpdateOpen = () => setIsUpdateOpen(true);

  const handleDeleteClose = () => setIsDeleteOpen(false);
  const handleDeleteOpen = () => setIsDeleteOpen(true);
  return (
    <div className="main-page">
      {/* header */}
      <div>
        <h3>recipes</h3>
        <button onClick={handleOpen}>Add a new Recipe</button>
        <button onClick={handleUpdateOpen}>Update a recipe</button>
        <button onClick={handleDeleteOpen}>Delete a recipe</button>
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
      <UpdateRecipeModal
        isUpdateOpen={isUpdateOpen}
        handleUpdateClose={handleUpdateClose}
      />
      <DeleteRecipeModal
        isDeleteOpen={isDeleteOpen}
        handleDeleteClose={handleDeleteClose}
      />
    </div>
  );
};

export default observer(RecipeList);
