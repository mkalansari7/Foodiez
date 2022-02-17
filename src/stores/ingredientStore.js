import { makeAutoObservable } from "mobx";
import ingredientsData from "../data/ingredientsData";

class IngredientStore {
  ingredients = ingredientsData;

  constructor() {
    makeAutoObservable(this);
  }
}

const ingredientStore = new IngredientStore();
export default ingredientStore;
