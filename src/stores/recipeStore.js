import { makeAutoObservable } from "mobx";
import recipesData from "../data/recipesData";

class RecipeStore {
  recipes = recipesData;

  constructor() {
    makeAutoObservable(this);
  }
}

const recipeStore = new RecipeStore();
export default recipeStore;
