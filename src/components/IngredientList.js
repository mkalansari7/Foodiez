import React, { useState } from "react";
import { observer } from "mobx-react";
import ingredientStore from "../stores/ingredientStore";
import Card from "./Card";
import AddIngredientModal from "./AddIngredientModal";
import { Link } from "react-router-dom";
import UpdateIngredientModal from "./UpdateIngredientModal";
import DeleteIngredientModal from "./DeleteIngredientModal";

const IngredientList = () => {
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
        <h3>ingredients</h3>
        <button onClick={handleOpen}>Add a new Ingredient</button>
        <button onClick={handleUpdateOpen}>Update an Ingredient</button>
        <button onClick={handleDeleteOpen}>Delete an Ingredient</button>
      </div>
      {/* content */}

      <div className="content">
        {ingredientStore.ingredients.map((ing) => (
          <Link key={ing._id} to={`/ingredients/${ing.slug}`}>
            <Card name={ing.name} image={ing.image} />
          </Link>
        ))}
      </div>
      {/* footer */}
      <AddIngredientModal isOpen={isOpen} handleClose={handleClose} />
      <UpdateIngredientModal
        isUpdateOpen={isUpdateOpen}
        handleUpdateClose={handleUpdateClose}
      />
      <DeleteIngredientModal
        isDeleteOpen={isDeleteOpen}
        handleDeleteClose={handleDeleteClose}
      />
    </div>
  );
};

export default observer(IngredientList);
