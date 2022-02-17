import React from "react";
import ingredientStore from "../stores/ingredientStore";
import Card from "./Card";

const IngredientList = () => {
  return (
    <div className="main-page">
      {/* header */}
      <h2>ingredients</h2>
      {/* content */}

      <div className="content">
        {ingredientStore.ingredients.map((ing) => (
          <Card name={ing.name} image={ing.image} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
};

export default IngredientList;
