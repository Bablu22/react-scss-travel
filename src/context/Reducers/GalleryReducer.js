import { CLOSE_LIGHTBOX, OPEN_LIGHTBOX } from "../Types/GaleeryTypes"

const galleryReducer = (state, action) => {

    if (action.type === OPEN_LIGHTBOX) {
        return {
            ...state,
            lightBoxStatus: true,
            currentLightBox: action.payload
        }
    }
    else if (action.type === CLOSE_LIGHTBOX) {
        return {
            ...state,
            lightBoxStatus: false,
            currentLightBox: {}
        }
    }
    else {
        return this.state
    }

}

export default galleryReducer


