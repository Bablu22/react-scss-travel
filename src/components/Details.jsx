import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationContext from "../context/DestinationContext";
import { CITIES, DETAILS } from "../context/Types/DetailsType";
import Cities from "./Cities";
import DestinationInfo from "./DestinationInfo";
import Header from "./Header";

function Details() {
    const {
        destinationData: { details, filteredCities },
        dispatch,
    } = useContext(DestinationContext);
    const { id } = useParams();
    useEffect(() => {
        dispatch({ type: DETAILS, payload: id });
        dispatch({ type: CITIES, payload: id })
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [id, dispatch]);

    return (
        <>
            <Header heading={details.name} image={details.bigImage} />
            <DestinationInfo details={details} />
            <Cities cities={filteredCities} name={details.name} />
        </>
    );
}

export default Details;
