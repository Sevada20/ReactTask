import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../App";

const photosHoc = (ComponentPhotos) => {
  return (props) => {
    const photosCats = useContext(MyContext).state.photoCats;
    const dispatch = useContext(MyContext).dispatch;
    const [limit, setLimit] = useState(1);
    const params = useParams();

    useEffect(() => {
      console.log("render photosHoc");
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=10&page=${limit}&category_ids=${params.id}`
        )
        .then((response) => {
          dispatch({
            type: "SET_PHOTOS",
            photosCats: response.data,
          });
        });
    }, [dispatch, limit, params.id]);

    const addPhotosCats = useCallback(() => {
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=10&page=${limit}&category_ids=${params.id}`
        )
        .then((response) => {
          dispatch({
            type: "ADD_PHOTOS",
            photosCats: response.data,
          });
        });
    }, [dispatch, limit, params.id]);

    return <ComponentPhotos {...props} {...{ addPhotosCats, photosCats }} />;
  };
};

export default photosHoc;
