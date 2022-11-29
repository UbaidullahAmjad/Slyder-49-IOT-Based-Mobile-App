import {
    CHANGE_SAILING,
    CHANGE_WATER_TEMP,
    CHANGE_WATER_DEPTH,
    CHNAGE_SOG
} from '../Actions/type';

const initialState = {
    Sog: 9.5,
    Twa: -142,
    Tws: 15.5,
    WaterTemp: 28.3,
    WaterDept: 36.5,
    Sog: 9.5
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_SAILING:
            return {
                ...state,
                Sog: payload.Sog,
                Twa: payload.Twa,
                Tws: payload.Tws,
            };
        case CHANGE_WATER_DEPTH:
            return {
                ...state,
                WaterDept: payload,

            };
        case CHNAGE_SOG:
            return {
                ...state,
                Sog: payload,

            };
        case CHANGE_WATER_TEMP:
            return {
                ...state,
                WaterTemp: payload,

            };
        default:
            return state;
    }
};