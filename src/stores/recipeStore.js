import { makeAutoObservable } from "mobx";
import recipesData from "../data/recipesData";

class RecipeStore {
  recipes = recipesData;

  constructor() {
    makeAutoObservable(this);
  }

  addRecipe = (newRecipe) => {
    newRecipe.id = this.recipes[this.recipes.length - 1].id + 1;

    this.recipes = [...this.recipes, newRecipe];
  };
}

const recipeStore = new RecipeStore();
export default recipeStore;
