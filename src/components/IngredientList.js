import React, { useState } from "react";
import { observer } from "mobx-react";
import ingredientStore from "../stores/ingredientStore";
import Card from "./Card";
import AddIngredientModal from "./AddIngredientModal";
import { Link } from "react-router-dom";

const IngredientList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <div className="main-page">
      {/* header */}
      <div>
        <h3>ingredients</h3>
        <button onClick={handleOpen}>Add a new Ingredient</button>
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
    </div>
  );
};

export default observer(IngredientList);
