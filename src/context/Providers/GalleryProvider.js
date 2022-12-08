import React, { useReducer } from "react";
import gallery from "../../data/gallery";
import GalleryContext from "../GalleryContext";
import galleryReducer from "../Reducers/GalleryReducer";

function GalleryProvider({ children }) {
    const [galleryData, dispatch] = useReducer(galleryReducer, {
        gallery,
        lightBoxStatus: false,
        currentLightBox: {}
    });
    return (
        <GalleryContext.Provider value={{ galleryData, dispatch }}>
            {children}
        </GalleryContext.Provider>
    );
}

export default GalleryProvider;
