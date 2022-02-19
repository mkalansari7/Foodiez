import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./Styles/Main-page.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategoryList from "./components/CategoryList";
import RecipeList from "./components/RecipeList";
import IngredientList from "./components/IngredientList";
import CategoryDetails from "./components/CategoryDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:slug" element={<CategoryDetails />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/ingredients" element={<IngredientList />} />
      </Routes>
    </div>
  );
}

export default App;
