import {
    UPPER_DECK_LIGHT_SALON,
    UPPER_DECK_OUTLETS_SALON,
    UPPER_DECK_LIGHT_OUTSIDE,
    UPPER_DECK_NAV_EQUIPMENT,

} from '../../../Actions/type';

const initialState = {
    lightsalon: false,
    outletsalon: false,
    lightOutside: false,
    navEquipment: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case UPPER_DECK_LIGHT_SALON:
            return {
                ...state,
                lightsalon: payload,

            };
        case UPPER_DECK_OUTLETS_SALON:
            return {
                ...state,
                outletsalon: payload,

            };
        case UPPER_DECK_LIGHT_OUTSIDE:
            return {
                ...state,
                lightOutside: payload,

            };
        case UPPER_DECK_NAV_EQUIPMENT:
            return {
                ...state,
                navEquipment: payload,

            };
        default:
            return state;
    }
};