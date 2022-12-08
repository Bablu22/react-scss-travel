import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsXCircleFill } from "react-icons/bs";

function Facilities({ name, value }) {
    return (
        <div className="cities_body_contents_facilities">
            <div className="cities_body_contents_facilities_name">{name}</div>
            <div className="cities_body_contents_facilities_value">
                {value ? <AiFillCheckCircle size={20} color="#34D399" /> : <BsXCircleFill size={20} color="#df2189" />}
            </div>
        </div>
    );
}

export default Facilities;
