import React from 'react'

function DestinationInfo({ details }) {
    return (
        <div className="destinationInfo">
            <div className="container">
                <h2 className="heading">
                    Overview
                </h2>
                <div className="row">
                    <div className="col-8">
                        <p className="destinationInfo_p">
                            {details.details}
                        </p>
                    </div>
                </div>
                <h2 className='heading'>Good to know</h2>
                <div className="row">
                    <div className="col-8">
                        <div className="destinationInfo_details">
                            <div className="destinationInfo_details_head">
                                Language
                            </div>
                            <div className="destinationInfo_details_text">
                                {details.language}
                            </div>
                        </div>
                        <div className="destinationInfo_details">
                            <div className="destinationInfo_details_head">
                                Currency
                            </div>
                            <div className="destinationInfo_details_text">
                                {details.currency}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo


