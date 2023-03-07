import { useEffect, useState } from "react";
import { addOneCategorieActionCreator } from "../../redux/categoriesReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

function categorieHoc(Component) {
  return () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const categorie = useSelector((state) => state.categories.categorie);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${params.id}`
        )
        .then((response) => {
          dispatch(addOneCategorieActionCreator(response.data));
        });
    }, [params.id]);
    function handleLimit() {
      setLimit(limit + 10);
    }
    function handlePage() {
      setPage(page + 1);
    }
    return (
      <Component
        categorie={categorie}
        handlePage={handlePage}
        handleLimit={handleLimit}
      />
    );
  };
}

export default categorieHoc;
