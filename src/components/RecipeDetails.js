import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ingredientStore from "../stores/ingredientStore";

import recipeStore from "../stores/recipeStore";

const RecipeDetails = () => {
  const { slug } = useParams();
  const recipe = recipeStore.recipes.find((recipe) => recipe.slug === slug);
  if (!recipe) return <Navigate to="/" />;

  return (
    // <div className="details">
    //   <h1 className="page-title">{recipe.name}</h1>
    //   <hr />
    //   <div className="row align-items-start">
    //     <div className="col-lg-4 col-md-12">
    //       <div className="card py-2 px-3 mb-3">
    //         <h3 className="fw-normal fs-3">
    //           Ingredient List: <br />{" "}
    //           <ul>
    //             {recipe.ingredients.map((currIng) =>
    //               ingredientStore.ingredients.map(
    //                 (ingredient) =>
    //                   ingredient.name === currIng.name && (
    //                     <li
    //                       key={ingredient._id}
    //                       className="fw-normal fs-5 py-1 px-2 bg-light mt-1 border rounded"
    //                     >
    //                       {ingredient.name}
    //                     </li>
    //                   )
    //               )
    //             )}
    //           </ul>
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="col-lg-8 col-md-12">
    //       <div className="details-borrowedBy card py-2 px-3 m-0">
    //         <h3 className="fw-normal fs-3">Category:</h3>

    //         <span>{recipe.category.name} </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="details">
      <h3 className="page-title">{recipe.name}</h3>
      <hr />
      <div className="row align-items-start">
        <div className="col-lg-4 col-md-12">
          <div className="card py-2 px-3 mb-3">
            <h3 className="fw-normal fs-3">
              Category: <br />{" "}
              <span className="fw-light fs-5 text-capitalize">
                {recipe.category.name}
              </span>
            </h3>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="details-borrowedBy card py-2 px-3 m-0">
            <h3 className="fw-normal fs-3">
              Ingredient List: <br />{" "}
              <ul>
                {recipe.ingredients.map((currIng) =>
                  ingredientStore.ingredients.map(
                    (ingredient) =>
                      ingredient.name === currIng.name && (
                        <li
                          key={ingredient._id}
                          className="fw-normal fs-5 py-1 px-2 bg-light mt-1 border rounded"
                        >
                          {ingredient.name}
                        </li>
                      )
                  )
                )}
              </ul>
            </h3>
          </div>
          <div className="card py-2 px-3 mb-3">
            <h3 className="fw-normal fs-3">
              Description: <br />
              <span className="fw-lighter fs-5 text-capitalize">
                {recipe.description}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
