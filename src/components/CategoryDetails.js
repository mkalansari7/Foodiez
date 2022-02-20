import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import categoryStore from "../stores/categoryStore";
import recipeStore from "../stores/recipeStore";
import Card from "./Card";

const CategoryDetails = () => {
  const { slug } = useParams();
  const category = categoryStore.categories.find((cate) => cate.slug === slug);
  if (!category) {
    return <Navigate to="/" />;
  }
  return (
    <div className="main-page">
      {/* header */}
      <div>
        <h3>{category.name} Recipes</h3>
        {/* <button onClick={handleOpen}>Add a new Category</button> */}
      </div>
      {/* content */}

      <div className="content">
        {category.recipes.map((currRec) =>
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
    // <div className="details">
    //   <h2 className="page-title">{category.name}</h2>
    //   <hr />

    //   <h4 className="fw-normal fs-4">Recipies:</h4>

    //   {category.recipes.map((currRec) =>
    //     recipeStore.recipes.map(
    //       (recipe) =>
    //         recipe.name === currRec.name && (
    //           <Card name={recipe.name} image={recipe.image} />
    //         )
    //     )
    //   )}
    // </div>
  );
};

export default CategoryDetails;
