import React from "react";
import { MdLocationPin } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Destination({ destination }) {
    return (
        <div className="col-3 p-10">
            <div className="destinations_card">
                <div className="destinations_card_img">
                    <LazyLoadImage src={destination.image} alt="" />
                </div>
                <div className="destinations_card_layer">
                    <div className="destinations_card_layer_content">
                        <MdLocationPin size={22} />
                    </div>
                    <div className="destinations_card_layer_content_country">
                        {destination.name}
                    </div>
                </div>
                <div className="destinations_card_info">
                    <div className="destinations_card_info_text">
                        <Link to={`/details/${destination.id}`} className="btn-white">
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
