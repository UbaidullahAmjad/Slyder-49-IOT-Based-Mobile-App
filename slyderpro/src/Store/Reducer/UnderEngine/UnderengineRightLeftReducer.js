import { CHANGE_UNDERENGINE_ETA, CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH, UNDER_ENGINE_DTW } from '../../Actions/type';
const initialState = {
    WaterDept: 0,
    dwt: "0",
    ttw: 'TB:D ',
    eta: '0 ',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case UNDER_ENGINE_DTW:
            return {
                ...state,
                dwt: payload,
            };
        case CHANGE_UNDERENGINE_ETA:
            return {
                ...state,
                eta: payload,
            };
        case CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH:
            return {
                ...state,
                WaterDept: payload,
            };
       
        default:
            return state;
    }
};