import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function ServiceList({ services }) {
    const [current, setCurrent] = useState(0)

    const showDetails = (index) => {
        setCurrent(index)
    }

    return (
        <>
            {services.length > 0 &&
                services.map((service, index) => (
                    <div className="services_list" key={index}>
                        <h4 className="services_list_heading" onClick={() => showDetails(index)}>
                            <MdKeyboardArrowRight size={20} className={current === index ? 'services_rotate' : 'services_back'} />
                            {service.heading}
                        </h4>
                        <h5 className={`services_list_details ${current === index ? 'services_list_details_show' : ''}`}>
                            {service.p}
                        </h5>
                    </div>
                ))}
        </>
    );
}

export default ServiceList;
