import React, { useReducer } from "react";
import Cities from "../../data/cities";
import { destinations } from "../../data/destinations";
import DestinationContext from "../DestinationContext";
import DestinationReducer from "../Reducers/DestinationReducer";

function DestinationProvider({ children }) {
    const [destinationData, dispatch] = useReducer(DestinationReducer, {
        destinations,
        details: {},
        cities: Cities,
        filteredCities:[]
    });

    return (
        <DestinationContext.Provider value={{ destinationData, dispatch }}>
            {children}
        </DestinationContext.Provider>
    );
}

export default DestinationProvider;
