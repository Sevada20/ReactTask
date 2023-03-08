import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../App";
import PhotoCat from "./PhotoCat";

const PhotosCats = () => {
  const photosCats = useContext(MyContext).state.photoCats;
  const dispatch = useContext(MyContext).dispatch;
  const [limit, setLimit] = useState(0);
  const params = useParams();

  useEffect(() => {
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

  const addPhotoClick = () => {
    setLimit(limit + 10);
  };
  return (
    <div>
      {photosCats.map((photo) => (
        <PhotoCat photo={photo} />
      ))}
      <button onClick={addPhotoClick}>more</button>
    </div>
  );
};

export default PhotosCats;
