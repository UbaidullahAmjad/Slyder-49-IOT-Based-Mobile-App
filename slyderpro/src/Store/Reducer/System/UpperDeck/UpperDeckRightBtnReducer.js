import {
    UPPERDECK_RIGHT_FURLER,
    UPPERDECK_RIGHT_CAPSTAN,
    UPPERDECK_RIGHT_ANCHOR,
    UPPERDECK_RIGHT_VHF,
    UPPDERDECK_RIGHT_REFRIDGERATOR,
    UPPERDECK_RIGHT_TV,
    UPPERDECK_RIGHT_HIFI,
    UPPERDECK_RIGHT_WINCHES,
    UPPERDECK_RIGHT_HELM,

} from '../../../Actions/type';

const initialState = {
    furler: false,
    capstan: false,
    anchor: false,
    vhf: false,
    refridgerator: false,
    tv: false,
    hifi: false,
    winches: false,
    helm: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case UPPERDECK_RIGHT_HELM:
            return {
                ...state,
                helm: payload,

            };
        case UPPERDECK_RIGHT_WINCHES:
            return {
                ...state,
                winches: payload,

            };
        case UPPERDECK_RIGHT_HIFI:
            return {
                ...state,
                hifi: payload,

            };
        case UPPERDECK_RIGHT_FURLER:
            return {
                ...state,
                furler: payload,

            };
        case UPPERDECK_RIGHT_CAPSTAN:
            return {
                ...state,
                capstan: payload,

            };
        case UPPERDECK_RIGHT_ANCHOR:
            return {
                ...state,
                anchor: payload,

            };
        case UPPERDECK_RIGHT_VHF:
            return {
                ...state,
                vhf: payload,

            };
        case UPPDERDECK_RIGHT_REFRIDGERATOR:
            return {
                ...state,
                refridgerator: payload,

            };
        case UPPERDECK_RIGHT_TV:
            return {
                ...state,
                tv: payload,

            };
        default:
            return state;
    }
};