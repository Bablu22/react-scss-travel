import { TOGGLE_NAV } from "../Types/NavType";

const NavReducer = (state, action) => {
    if (action.type === TOGGLE_NAV) {
        return !state;
    } else {
        return state;
    }
};

export default NavReducer;
