import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoriesActionCreator } from "../../redux/categoriesReducer";

function categoriesHoc(Component) {
  return () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    useEffect(() => {
      axios
        .get("https://api.thecatapi.com/v1/categories")
        .then((response) =>
          dispatch(addCategoriesActionCreator(response.data))
        );
    }, []);
    return <Component categories={categories} />;
  };
}

export default categoriesHoc;
