import React, { useReducer } from 'react'
import NavContext from '../NavContext'
import NavReducer from '../Reducers/NavReducer'

function NavProvider({ children }) {
    const [state, dispatch] = useReducer(NavReducer, false)

    return (
        <NavContext.Provider value={{ state, dispatch }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider