import React, { useReducer } from "react";
import ModalContext from "../ModalContext";
import ModalReducer from "../Reducers/ModalReducer";

function ModalProvider({ children }) {
    const [state, dispatch] = useReducer(ModalReducer, { modalStatus: false });

    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;
