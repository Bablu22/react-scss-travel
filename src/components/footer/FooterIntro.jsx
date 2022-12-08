import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function FooterIntro() {
    const [state] = useState({
        logo: "/assets/footer/logo.png",
        intro: "Travelers friends us a traveling agency, we arrange tours to the world famous and most beautiful countries, Since 2005 we provide high quality services to our customers"
    })
    return (
        <div className="footer_intro">
            <div className="footer_intro_img">
                <LazyLoadImage src={state.logo} />
            </div>
            <p className="footer_intro_msg">
                {state.intro}
            </p>
        </div>
    )
}

export default FooterIntro


