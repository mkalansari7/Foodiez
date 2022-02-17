import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./Styles/Main-page.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
