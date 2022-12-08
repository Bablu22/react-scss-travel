import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function AboutImage() {
    const [image] = useState("/assets/about/about.jpg")
    return (
        <div className="page_image">
            <LazyLoadImage src={image} />
        </div>
    )
}

export default AboutImage