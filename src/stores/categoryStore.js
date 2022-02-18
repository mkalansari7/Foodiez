import { makeAutoObservable } from "mobx";
import categoriesData from "../data/categoriesData";

class CategoryStore {
  categories = categoriesData;

  constructor() {
    makeAutoObservable(this);
  }

  addCategory = (newCategory) => {
    newCategory.id = this.categories[this.categories.length - 1].id + 1;

    this.categories = [...this.categories, newCategory];
  };
}

const categoryStore = new CategoryStore();
export default categoryStore;
