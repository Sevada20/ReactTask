import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../../App";

const categoriesHoc = (CategoriesComponent) => {
  return (props) => {
    const categories = useContext(MyContext).state.categories;
    const dispatch = useContext(MyContext).dispatch;

    useEffect(() => {
      console.log("render categoriesHoc");
      axios.get("https://api.thecatapi.com/v1/categories").then((response) => {
        dispatch({
          type: "SET_CATEGORIES",
          payload: response.data,
        });
      });
    }, [dispatch]);

    return <CategoriesComponent {...props} {...{ categories }} />;
  };
};
export default categoriesHoc;
