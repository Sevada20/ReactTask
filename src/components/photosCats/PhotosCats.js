import photosHoc from "./photosHoc";
import PhotoCat from "./PhotoCat";
import { memo, useMemo } from "react";
import "./PhotosCats.css";
const PhotosCats = ({ addPhotosCats, photosCats }) => {
  const memoizedPhotosCats = useMemo(() => {
    return photosCats.map((photo) => <PhotoCat key={photo.id} photo={photo} />);
  }, [photosCats]);

  return (
    <div className="photosContainer">
      {memoizedPhotosCats}
      <button onClick={addPhotosCats}>more</button>
    </div>
  );
};

export default photosHoc(memo(PhotosCats));
