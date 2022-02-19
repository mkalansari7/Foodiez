import React from "react";
import { useParams, Navigate } from "react-router-dom";
import categoryStore from "../stores/categoryStore";
import recipeStore from "../stores/recipeStore";

const CategoryDetails = () => {
  const { slug } = useParams();
  const category = categoryStore.categories.find((cate) => cate.slug === slug);
  if (!category) {
    return <Navigate to="/" />;
  }
  return (
    <div className="details">
      <h2 className="page-title">{category.name}</h2>
      <hr />
      <div className="">
        <div className=""></div>
        <div className="">
          <div className="details-borrowedBy card py-2 px-3 m-0">
            <h4 className="fw-normal fs-4">Recipies:</h4>
            <ul>
              {category.recipes.map((currRec) =>
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

export default CategoryDetails;
