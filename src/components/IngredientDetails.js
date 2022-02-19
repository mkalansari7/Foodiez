import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ingredientStore from "../stores/ingredientStore";
import recipeStore from "../stores/recipeStore";

const IngredientDetails = () => {
  const { slug } = useParams();
  const ingredient = ingredientStore.ingredients.find(
    (ing) => ing.slug === slug
  );
  console.log(ingredient);
  if (!ingredient) {
    return <Navigate to="/" />;
  }
  return (
    <div className="details">
      <h2 className="page-title">{ingredient.name}</h2>
      <hr />
      <div className="">
        <div className=""></div>
        <div className="">
          <div className="details-borrowedBy card py-2 px-3 m-0">
            <h4 className="fw-normal fs-4">Recipies:</h4>
            <ul>
              {ingredient.recipes.map((currRec) =>
                recipeStore.recipes.map(
                  (recipe) =>
                    recipe.name === currRec.name && (
                      <li
                        key={recipe.id}
                        className="fw-normal fs-5 py-1 px-2 bg-light mt-1 border rounded"
                      >
                        {recipe.name}
                      </li>
                    )
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
