import { memo } from "react";
import { NavLink } from "react-router-dom";
import categoriesHoc from "./CategoriesHoc";
import "./Categories.css";
function Categories({ categories }) {
  console.log("render Categories");
  return (
    <div className="categories">
      {categories.map((categorie) => (
        <div key={categorie.id}>
          <NavLink to={`/${categorie.id}`}>{categorie.name}</NavLink>
        </div>
      ))}
    </div>
  );
}
export default categoriesHoc(
  memo(
    Categories,
    (prevProps, nextProps) =>
      JSON.stringify(prevProps) === JSON.stringify(nextProps)
  )
);
