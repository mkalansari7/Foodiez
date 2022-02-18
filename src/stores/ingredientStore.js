import { makeAutoObservable } from "mobx";
import ingredientsData from "../data/ingredientsData";

class IngredientStore {
  ingredients = ingredientsData;

  constructor() {
    makeAutoObservable(this);
  }

  addIngredient = (newIngredient) => {
    newIngredient.id = this.ingredients[this.ingredients.length - 1].id + 1;

    this.ingredients = [...this.ingredients, newIngredient];
  };
}

const ingredientStore = new IngredientStore();
export default ingredientStore;
