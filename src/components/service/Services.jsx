import React, { useContext, useState } from "react";
import SharedContext from "../../context/SharedContext";
import ServiceLeft from "./ServiceLeft";
import ServiceList from "./ServiceList";

function Services() {

    const { sharedData: { serviceData } } = useContext(SharedContext)


    const [state] = useState({
        heading:
            "Why customers love travel friends? because we provide unique services",
        subHeading:
            "ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis laudantium ipsa maxime assumenda corrupti veniam similique, est odio ab impedit officia maiores praesentium pariatur sequi aliquid ducimus autem atque?",
    });
    return (
        <div className="services">
            <div className="services_contents">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-15">
                            <ServiceLeft
                                heading={state.heading}
                                subHeading={state.subHeading}
                            />
                        </div>
                        <div className="col-6 p-15">
                            <ServiceList services={serviceData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
