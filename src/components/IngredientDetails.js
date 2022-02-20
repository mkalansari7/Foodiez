import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import ingredientStore from "../stores/ingredientStore";
import recipeStore from "../stores/recipeStore";
import Card from "./Card";

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
    <div className="main-page">
      {/* header */}
      <div>
        <h3>{ingredient.name} Recipes</h3>
        {/* <button onClick={handleOpen}>Add a new Category</button> */}
      </div>
      {/* content */}

      <div className="content">
        {ingredient.recipes.map((currRec) =>
          recipeStore.recipes.map(
            (recipe) =>
              recipe.name === currRec.name && (
                <Link key={recipe._id} to={`/recipes/${recipe.slug}`}>
                  <Card name={recipe.name} image={recipe.image} />
                </Link>
              )
          )
        )}
      </div>
      {/* footer */}
      {/* <AddCategoryModal isOpen={isOpen} handleClose={handleClose} /> */}
    </div>
  );
};

export default IngredientDetails;
