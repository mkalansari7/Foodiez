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
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ addRecipe= ~ error",
        error
      );
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.getRecipes();
export default recipeStore;
