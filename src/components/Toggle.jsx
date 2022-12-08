import React, { useContext } from 'react'
import NavContext from '../context/NavContext'
import { TOGGLE_NAV } from "../context/Types/NavType"

function Toggle() {
    const { state, dispatch } = useContext(NavContext)

    return (
        <div className={state ? 'toggle_close' : 'toggle_open'} onClick={() => dispatch({ type: TOGGLE_NAV })}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}


export default Toggle