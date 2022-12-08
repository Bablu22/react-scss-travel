import { CITIES, DETAILS } from "../Types/DetailsType";

const DestinationReducer = (state, action) => {
    if (action.type === DETAILS) {
        const destination = state.destinations.find(
            (dest) => dest.id === parseInt(action.payload)
        );

        return {
            ...state,
            details: destination,
        };
    }
    else if (action.type === CITIES) {
        const filtered = state.cities.filter(city => parseInt(city.destinationId) === parseInt(action.payload))

        return {
            ...state,
            filteredCities: filtered
        }
    }

    return state;
};

export default DestinationReducer;
