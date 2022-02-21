import { makeAutoObservable } from "mobx";
import categoryStore from "./categoryStore";
import ingredientStore from "./ingredientStore";
import instance from "./instance";

class RecipeStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  getRecipes = async () => {
    try {
      const response = await instance.get("/recipe");
      this.recipes = response.data;
    } catch (error) {
      console.log("RecipeStore -> getRecipes -> error", error);
    }
  };

  addRecipe = async (newRecipe, categoryId) => {
    try {
      let dataOfRec = [];
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      newRecipe.ing
        .trim()
        .split(",")
        .forEach(async (i) => {
          console.log(i);
          dataOfRec.push({
            name: i,
            image:
              "http://localhost:8000/media/1645442876440update-stamp-with-word-update-inside-vector-illustration-eps-vector_csp17122744%20(3).jpg",
          });

          const foundIng = ingredientStore.ingredients.find(
            (ingre) => ingre.name === i
          );
          if (!foundIng) {
            const ig = await ingredientStore.addIngredient({
              name: i.trim(),
              image:
                "http://localhost:8000/media/1645442876440update-stamp-with-word-update-inside-vector-illustration-eps-vector_csp17122744%20(3).jpg",
            });
          }
        });
      const response = await instance.post(
        `/category/${categoryId}/recipe`,
        formData
      );
      console.log(
        "🚀 ~ file: recipeStore.js ~ line 51 ~ RecipeStore ~ addRecipe= ~ response.data.ingredients",
        response.data.ingredients
      );
      console.log(
        "🚀 ~ file: recipeStore.js ~ line 52 ~ RecipeStore ~ addRecipe= ~ dataOfRec",
        dataOfRec
      );
      response.data.ingredients = [...dataOfRec];
      response.data.category = categoryStore.categories.find(
        (cate) => cate._id === categoryId
      );
      this.recipes.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ addRecipe ~ error",
        error
      );
    }
  };

  updateRecipe = async (updatedRecipe, recipeId, categoryId) => {
    try {
      const formData = new FormData();
      for (const key in updatedRecipe) formData.append(key, updatedRecipe[key]);
      const response = await instance.put(
        `/category/${categoryId}/${recipeId}`,
        formData
      );
      this.getRecipes();
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ updateRecipe ~ error",
        error
      );
    }
  };

  deleteRecipe = async (id) => {
    try {
      await instance.delete(`/recipe/${id}`);
      this.recipes = this.recipes.filter((rec) => rec._id !== id);
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ deleteIngredient= ~ error",
        error
      );
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.getRecipes();
export default recipeStore;
