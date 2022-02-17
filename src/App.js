import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./Styles/Main-page.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategoryList from "./components/CategoryList";
import RecipeList from "./components/RecipeList";
import IngredientList from "./components/IngredientList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/ingredients" element={<IngredientList />} />
      </Routes>
    </div>
  );
}

export default App;
