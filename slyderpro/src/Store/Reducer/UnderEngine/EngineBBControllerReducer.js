import {
    CHANGE_RIGHT_UNDERENGINE_MOTOR,
    CHANGE_LEFT_UNDERENGINE_MOTOR,
} from '../../Actions/type'
const initialState = {
    weatherSpeed: 28.3,
    rightControllerEngine: {
        controllerTemp: 0,
        engineTemp: 0
    },
    LeftControllerEngine: {
        controllerTemp: 0,
        engineTemp: 0
    },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_LEFT_UNDERENGINE_MOTOR:
            return {
                ...state,
                LeftControllerEngine: { controllerTemp: payload.controllerTemp, engineTemp: payload.engineTemp },
            };

        case CHANGE_RIGHT_UNDERENGINE_MOTOR:
            return {
                ...state,
                rightControllerEngine: { controllerTemp: payload.controllerTemp, engineTemp: payload.engineTemp },
            };

        default:
            return state;
    }
};