import {
    CHANGE_UNDERENGINE_LEFT_WATER_TEMP
} from '../../Actions/type';
const initialState = {
    Watertemp: 0,
    log1:"TBD",
    log2:"TBD",
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_UNDERENGINE_LEFT_WATER_TEMP:
            return {
                ...state,
                Watertemp: payload,
            };
        default:
            return state;
    }
};