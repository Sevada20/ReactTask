import { NavLink } from "react-router-dom";
import categoriesHoc from "./CategoriesHoc";
function Categories({ categories }) {
  return (
    <div className="categoriesContainer">
      {categories.map((categorie) => (
        <div key={categorie.id}>
          <NavLink to={`categorie/${categorie.id}`}>{categorie.name}</NavLink>
        </div>
      ))}
    </div>
  );
}

export default categoriesHoc(Categories);
