import React from "react";
const PhotoCat = ({ photo }) => {
  console.log("render photoCat");
  return (
    <div key={photo.id}>
      <img src={photo.url} alt="no photos" />
    </div>
  );
};

export default PhotoCat;
