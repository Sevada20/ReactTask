import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categorie from "./components/categories/Categorie";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <div className="App">
      <div>
        <Categories />
      </div>
      <Routes>
        <Route path="/categorie/:id" element={<Categorie />} />
      </Routes>
    </div>
  );
}

export default App;
