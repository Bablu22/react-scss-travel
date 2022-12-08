import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import GalleryContext from '../../context/GalleryContext'
import { CLOSE_LIGHTBOX } from '../../context/Types/GaleeryTypes'

function LightBox() {
    const { galleryData: { currentLightBox }, dispatch } = useContext(GalleryContext)

    const closeLightBox = (e) => {
        const className = e.target.getAttribute('class')
        if (className === 'gallery_lightbox') {
            dispatch({ type: CLOSE_LIGHTBOX })
        }
    }

    return (
        <div className="gallery_lightbox" onClick={closeLightBox}>
            <h4>{currentLightBox.name}</h4>
            <div className="gallery_lightbox_card">
                <div className="gallery_lightbox_card_image">
                    <LazyLoadImage src={currentLightBox.image} />
                </div>
            </div>
        </div>
    )
}

export default LightBox
