import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Header({ heading, paragraph, children, image }) {
    const [state] = useState({
        video: "/assets/videos/header.mp4",
        poster: "/assets/images/screen.png",
        logo: "/assets/images/logo.png",
    });

    return (
        <div className="header">
            <div className="container pr">
                <div>
                    <div className="header_logo">
                        <Link to="/">
                            <img src={state.logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="header_video">
                {image ? (
                    <LazyLoadImage src={image} alt="cover" />
                ) : (
                    <video
                        src={state.video}
                        autoPlay
                        muted
                        loop
                        poster={state.poster}
                    ></video>
                )}
            </div>
            <div className="header_contents">
                <div className="container">
                    <div className="header_contents_text">
                        <div className="header_contents_text_child">
                            <h1 className="header_contents_text_child_h1">{heading}</h1>
                            <p className="header_contents_text_child_p">{paragraph}</p>
                            <div className="header_contents_text_child_link">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
