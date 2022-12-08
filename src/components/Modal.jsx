import React, { useContext } from "react";
import ModalContext from "../context/ModalContext";
import { CLOSE_MODAL } from "../context/Types/ModalType";

function Modal({ children }) {
    const { state, dispatch } = useContext(ModalContext);

    const close = (e) => {
        if (e.target.getAttribute("class") === "modal") {
            dispatch({ type: CLOSE_MODAL });
        }
    };

    return state.modalStatus ? (
        <div className="modal" onClick={close}>
            <div className="modal_body">
                {children}
            </div>
        </div>
    ) : (
        ""
    );
}

export default Modal;
