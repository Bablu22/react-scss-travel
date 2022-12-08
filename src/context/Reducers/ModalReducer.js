import { CLOSE_MODAL, OPEN_MODAL } from "../Types/ModalType";

const ModalReducer = (state, action) => {
    if (action.type === OPEN_MODAL) {
        return {
            modalStatus: true,
        };
    } else if (action.type === CLOSE_MODAL) {
        return { modalStatus: false };
    } else {
        return state;
    }
};

export default ModalReducer;


