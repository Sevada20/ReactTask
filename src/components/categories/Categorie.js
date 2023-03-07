import { useState } from "react";
import { useDispatch } from "react-redux";
import { moreActionCreator } from "../../redux/categoriesReducer";
import categorieHoc from "./CategorieHoc";

function Categorie({ categorie, handleLimit, handlePage }) {
  const dispatch = useDispatch();
  return (
    <div>
      {categorie.map((item) => (
        <div key={item.id}>
          <img src={item.url} />
        </div>
      ))}
      <button
        onClick={() => {
          dispatch(moreActionCreator(categorie));
          handleLimit();
          handlePage();
        }}
      >
        more
      </button>
    </div>
  );
}

export default categorieHoc(Categorie);
