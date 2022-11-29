import {
    LOWER_DECK_LIGHT_BB,
    LOWER_DECK_LIGHT_STB,
    LOWER_DECK_OUTLETS_BB,
    LOWER_DECK_OUTLETS_STB

} from '../../../Actions/type';

const initialState = {
    lightSBB: false,
    lightSTB: false,
    outletsBB: false,
    outletsstb: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case LOWER_DECK_OUTLETS_STB:
            return {
                ...state,
                outletsstb: payload,
            };
        case LOWER_DECK_OUTLETS_BB:
            return {
                ...state,
                outletsBB: payload,
            };
        case LOWER_DECK_LIGHT_STB:
            return {
                ...state,
                lightSTB: payload,
            };
        case LOWER_DECK_LIGHT_BB:
            return {
                ...state,
                lightSBB: payload,
            };
        default:
            return state;
    }
};