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

  updateIngredient = async (updatedIngredient, id) => {
    try {
      const formData = new FormData();
      for (const key in updatedIngredient)
        formData.append(key, updatedIngredient[key]);
      const response = await instance.put(`/ingredient/${id}`, formData);
      this.ingredients = this.ingredients.map((ing) =>
        ing._id === id ? response.data : ing
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: IngredientStore.js ~ line 16 ~ IngredientStore ~ updateIngredient= ~ error",
        error
      );
    }
  };

  deleteIngredient = async (id) => {
    try {
      await instance.delete(`/ingredient/${id}`);
      this.ingredients = this.ingredients.filter((ing) => ing._id !== id);
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
