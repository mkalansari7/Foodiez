import "./App.css";
import "./Styles/Main-page.css";
import Navbar from "./components/Navbar";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <Category />
      </div>
    </div>
  );
}

export default App;
