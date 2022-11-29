import { CHANGE_UNDERENGINE_LEFT_GENERATOR, CHANGE_UNDERENGINE_LEFT_NAV_QUIPMENT, CHANGE_UNDERENGINE_LEFT_PROPULSION } from '../../Actions/type';
const initialState = {
    nav_quipment: false,
    propulsion: false,
    generator: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
      
        case CHANGE_UNDERENGINE_LEFT_NAV_QUIPMENT:
            return {
                ...state,
                nav_quipment: payload,
            };
        case CHANGE_UNDERENGINE_LEFT_PROPULSION:
            return {
                ...state,
                propulsion: payload,
            };
        case CHANGE_UNDERENGINE_LEFT_GENERATOR:
            return {
                ...state,
                generator: payload,
            };
        default:
            return state;
    }
};