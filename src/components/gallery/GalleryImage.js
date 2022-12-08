import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GalleryContext from "../../context/GalleryContext";
import { OPEN_LIGHTBOX } from "../../context/Types/GaleeryTypes";

function GalleryImage({ image }) {
  const { dispatch } = useContext(GalleryContext);

  const openLightBox = (image) => {
    dispatch({ type: OPEN_LIGHTBOX, payload: image });
  };

  return (
    <div className="gallery_image">
      <LazyLoadImage src={image.image} onClick={() => openLightBox(image)} />
    </div>
  );
}

export default GalleryImage;
