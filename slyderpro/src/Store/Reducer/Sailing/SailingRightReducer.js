import {
    SAILING_WINCHES, SAILING_WINDLASS,
     SAILING_HYDRO_GEN_STD, CHANGE_SAILING_RIGHT_SOG, CHANGE_SAILING_ETA, SAILING_DTW,SAILING_LEFT_TWA
} from '../../Actions/type';

const initialState = {
    sog: 0,
    winches: false,
    windlass: false,
    hydro_gen_stb: false,
    twa: "0",
    tws: "TBD",
    dtw: "0",
    ttw: "TB:D",
    eta: "0",
    hydeogenstb: "TBD",
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case SAILING_LEFT_TWA:
            return {
                ...state,
                twa: payload,
            };
        case SAILING_DTW:
            return {
                ...state,
                dtw: payload,
            };
        case CHANGE_SAILING_ETA:
            return {
                ...state,
                eta: payload,
            };
        case CHANGE_SAILING_RIGHT_SOG:
            return {
                ...state,
                sog: payload,
            };
        case SAILING_WINCHES:
            return {
                ...state,
                winches: payload,
            };
        case SAILING_WINDLASS:
            return {
                ...state,
                windlass: payload,
            };
        case SAILING_HYDRO_GEN_STD:
            return {
                ...state,
                hydro_gen_stb: payload,
            };
        default:
            return state;
    }
};