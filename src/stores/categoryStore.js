import { makeAutoObservable } from "mobx";
import categoriesData from "../data/categoriesData";

class CategoryStore {
  categories = categoriesData;

  constructor() {
    makeAutoObservable(this);
  }
}

const categoryStore = new CategoryStore();
export default categoryStore;
