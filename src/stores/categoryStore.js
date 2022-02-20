import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCategories = async () => {
    try {
      const response = await instance.get("/category");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoryStore -> getCategories -> error", error);
    }
  };

  addCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const response = await instance.post("/category", formData);
      this.categories.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: CategoryStore.js ~ line 16 ~ CategoryStore ~ addCategory= ~ error",
        error
      );
    }
  };

  updateCategory = async (updatedCategory, id) => {
    try {
      const formData = new FormData();
      for (const key in updatedCategory)
        formData.append(key, updatedCategory[key]);
      const response = await instance.put(`/category/${id}`, formData);
      this.categories = this.categories.map((ing) =>
        ing._id === id ? response.data : ing
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: CategoryStore.js ~ line 16 ~ CategoryStore ~ addCategory= ~ error",
        error
      );
    }
  };

  deleteCategory = async (id) => {
    try {
      await instance.delete(`/category/${id}`);
      this.categories = this.categories.filter((ing) => ing._id !== id);
    } catch (error) {
      console.log(
        "🚀 ~ file: CategoryStore.js ~ line 16 ~ CategoryStore ~ addCategory= ~ error",
        error
      );
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.getCategories();
export default categoryStore;
