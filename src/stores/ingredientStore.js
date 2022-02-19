import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }

  getIngredients = async () => {
    try {
      const response = await instance.get("/ingredient");
      this.ingredients = response.data;
    } catch (error) {
      console.log("IngredientStore -> getIngredients -> error", error);
    }
  };

  addIngredient = async (newIngredient) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const response = await instance.post("/ingredient", formData);
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: IngredientStore.js ~ line 16 ~ IngredientStore ~ addIngredient= ~ error",
        error
      );
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.getIngredients();
export default ingredientStore;
