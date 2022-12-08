import React, { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";

function Gallery() {
    const {
        galleryData: { gallery, lightBoxStatus },
        dispatch,
    } = useContext(GalleryContext);

    return (
        <>
            {lightBoxStatus && <LightBox />}
            <div className="gallery">
                <div className="container">
                    <h2 className="heading">Travelers captured images</h2>
                </div>
                <div className="row">
                    {gallery.length > 0 &&
                        gallery.map((image) => (
                            <div className="col-3" key={image.id}>
                                <GalleryImage image={image} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Gallery;
