import {
    CHANGE_UNDERENGINE_RIGHT_CAPSTAN_WINCHES, CHANGE_UNDERENGINE_WINCHES,
    CHANGE_UNDERENGINE_WINDLASS
} from '../../Actions/type';
const initialState = {
    winches: false,
    windlass: false,
    capstan_winches: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState

        case CHANGE_UNDERENGINE_WINCHES:
            return {
                ...state,
                winches: payload,
            };
        case CHANGE_UNDERENGINE_WINDLASS:
            return {
                ...state,
                windlass: payload,
            };
        case CHANGE_UNDERENGINE_RIGHT_CAPSTAN_WINCHES:
            return {
                ...state,
                capstan_winches: payload,
            };
        default:
            return state;
    }
};