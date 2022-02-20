import { makeAutoObservable } from "mobx";
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
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);

      const response = await instance.post(
        `/category/${categoryId}/recipe`,
        formData
      );
      this.recipes.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ addRecipe ~ error",
        error
      );
    }
  };

  updateRecipe = async (updatedRecipe, id) => {
    try {
      const formData = new FormData();
      for (const key in updatedRecipe) formData.append(key, updatedRecipe[key]);
      const response = await instance.put(`/recipe/${id}`, formData);
      this.recipes = this.recipes.map((rec) =>
        rec._id === id ? response.data : rec
      );
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
