import "./App.css";
import { createContext, useReducer } from "react";
import Categories from "./components/categories/Categories";
import PhotosCats from "./components/photosCats/PhotosCats";
import { Route, Routes } from "react-router-dom";
import { categoriesReducer } from "./reducer/categoriesReducer";

export const MyContext = createContext();

function App() {
  console.log("render App");
  const [state, dispatch] = useReducer(categoriesReducer, {
    categories: [],
    photoCats: [],
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Categories />
        <Routes>
          <Route path="/:id" element={<PhotosCats />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
