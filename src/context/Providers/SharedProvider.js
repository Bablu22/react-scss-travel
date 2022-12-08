import React, { useReducer } from 'react'
import services from "../../data/services"
import SharedReducer from '../Reducers/SharedReducer'
import SharedContext from '../SharedContext'

function SharedProvider({ children }) {
    const [sharedData, dispatch] = useReducer(SharedReducer, {
        serviceData: services
    })

    return (
        <SharedContext.Provider value={{ sharedData, dispatch }}>
            {children}
        </SharedContext.Provider>
    )
}


export default SharedProvider

