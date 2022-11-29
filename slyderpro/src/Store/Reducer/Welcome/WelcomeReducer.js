import {
    CHANGE_WELCOME_AIRCON,
    CHANGE_WELCOME_POWER_UP,
    CHANGE_WELCOME_SYSTEM_CHECK
} from '../../Actions/type'
const initialState = {
    systemCheck: false,
    powerUp: false,
    airCon: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_WELCOME_SYSTEM_CHECK:
            return {
                ...state,
                systemCheck: payload,
            };

        case CHANGE_WELCOME_POWER_UP:
            return {
                ...state,
                powerUp: payload,
            };

        case CHANGE_WELCOME_AIRCON:
            return {
                ...state,
                airCon: payload,
            };

        default:
            return state;
    }
};