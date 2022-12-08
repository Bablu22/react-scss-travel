import React from 'react'

function ServiceLeft({ heading, subHeading }) {
    return (
        <div className='services_left'>
            <h1 className="services_left_heading">
                {heading}
            </h1>
            <p className="services_left_p">
                {subHeading}
            </p>
        </div>
    )
}

export default ServiceLeft
