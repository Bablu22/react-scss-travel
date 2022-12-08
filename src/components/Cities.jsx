import React from "react";
import { BsStopwatchFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Facilities from "./Facilities";

function Cities({ cities, name }) {
    return (
        <div className="cities">
            <div className="container">
                <div className="cities_container">
                    <h2 className="heading">Cities in {name}</h2>
                    <div className="row">
                        {cities.length > 0
                            ? cities.map((city) => (
                                <div className="col-3 p-15" key={city.id}>
                                    <div className="cities_body">
                                        <div className="cities_body_image">
                                            <LazyLoadImage src={city.image} />
                                            <div
                                                className={
                                                    city.status === "Bestselling"
                                                        ? "bestselling"
                                                        : city.status === "New"
                                                            ? "new"
                                                            : city.status === "Hot"
                                                                ? "hot"
                                                                : ""
                                                }
                                            >
                                                {city.status}
                                            </div>
                                        </div>

                                        <div className="cities_body_contents">
                                            <div className="cities_body_contents_top">
                                                <div className="cities_body_contents_top_name">
                                                    {city.name}
                                                </div>
                                                <div className="cities_body_contents_top_duration">
                                                    <BsStopwatchFill size={18} color="#df2189" />
                                                    <div className="cities_body_contents_top_duration_time">
                                                        {city.duration}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cities_body_contents_price">
                                                <span className="cities_body_contents_price_dollar">
                                                    $
                                                </span>
                                                {city.price}.00
                                            </div>
                                            <Facilities name="room" value={city.room} />
                                            <Facilities name="food" value={city.food} />
                                            <div className="cities_body_contents_button">
                                                <button className="btn-dark-sm">buy now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : `No cities in ${name}`}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cities;
