import {
    CHANGE_FRESHWATER_BB,
    CHANGE_FRESHWATER_STB,
    CHANGE_BLACKWATER_STB,
    CHANGE_BLACKWATER_BB,
    CHANGE_DIESEL,
    CHNAGE_FRESHWATER_COLOR_SCALE,
    CHNAGE_BLACKWATER_COLOR_SCALE,
    CHNAGE_DIESEL_COLOR_SCALE
} from '../../Actions/type'
const initialState = {
    freshWaterbb: 0,
    freshwaterstb: 0,
    blackwaterbb: 0,
    blackwaterstb: 0,
    diesel: 0,
    freshwaterColorScale: {
        low: 20,
        reserve: 10

    },
    blackwaterColorScale: {
        low: 80,
        reserve: 90

    },
    DiesilColorScale: {
        low: 20,
        reserve: 10

    },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHNAGE_DIESEL_COLOR_SCALE:
            return {
                ...state,
                DiesilColorScale: { low: payload.low, reserve: payload.reserve },

            };
        case CHNAGE_BLACKWATER_COLOR_SCALE:
            return {
                ...state,
                blackwaterColorScale: { low: payload.low, reserve: payload.reserve },

            };
        case CHNAGE_FRESHWATER_COLOR_SCALE:
            return {
                ...state,
                freshwaterColorScale: { low: payload.low, reserve: payload.reserve },

            };
        case CHANGE_DIESEL:
            return {
                ...state,
                diesel: payload,

            };
        case CHANGE_BLACKWATER_BB:
            return {
                ...state,
                blackwaterbb: payload,

            };
        case CHANGE_BLACKWATER_STB:
            return {
                ...state,
                blackwaterstb: payload,

            };
        case CHANGE_FRESHWATER_STB:
            return {
                ...state,
                freshwaterstb: payload,

            };
        case CHANGE_FRESHWATER_BB:
            return {
                ...state,
                freshWaterbb: payload,

            };

        default:
            return state;
    }
};