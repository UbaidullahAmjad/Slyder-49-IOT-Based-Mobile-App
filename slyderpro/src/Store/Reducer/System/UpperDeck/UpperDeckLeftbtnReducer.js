import {
    UPPERDECK_LEFT_AIR_CON,
    UPPERDECK_LEFT_FREEZER,
    UPPERDECK_LEFT_STOVE,
    UPPERDECK_LEFT_HOOD,
    UPPERDECK_LEFT_OVEN,
    UPPERDECK_LEFT_QUOOKER

} from '../../../Actions/type';

const initialState = {
    aircon: false,
    freezer: false,
    stove: false,
    hood: false,
    oven: false,
    quooker: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case UPPERDECK_LEFT_QUOOKER:
            return {
                ...state,
                quooker: payload,

            };
        case UPPERDECK_LEFT_OVEN:
            return {
                ...state,
                oven: payload,

            };
        case UPPERDECK_LEFT_AIR_CON:
            return {
                ...state,
                aircon: payload,

            };
        case UPPERDECK_LEFT_FREEZER:
            return {
                ...state,
                freezer: payload,

            };
        case UPPERDECK_LEFT_STOVE:
            return {
                ...state,
                stove: payload,

            };
        case UPPERDECK_LEFT_HOOD:
            return {
                ...state,
                hood: payload,

            };
        default:
            return state;
    }
};