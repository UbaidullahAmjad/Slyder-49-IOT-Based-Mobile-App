import {
    CHANGE_UNDER_ENGINE_SOG,
    CHANGE_UNDERENGINE_RIGHT_RPM,
    CHANGE_UNDERENGINE_LEFT_RPM,
    CHANGE_UNDERENGINE_HEADING,
    CHANGE_UNDERENGINE_RUDDER_POSITION,
    UNDER_ENGINE_CENTRAL_SPEED
} from '../../Actions/type'
const initialState = {
    sog: 0,
    rightRpm: 0,
    leftRpm: 0,
    Heading: 0,
    RudderPosition: 0,
    speed:"0",
    range:"TBD",
    rangeHrs:"TB:D"
    

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case UNDER_ENGINE_CENTRAL_SPEED:
            return {
                ...state,
                speed: payload,
            };
        case CHANGE_UNDERENGINE_RUDDER_POSITION:
            return {
                ...state,
                RudderPosition: payload,
            };
        case CHANGE_UNDERENGINE_HEADING:
            return {
                ...state,
                Heading: payload,
            };
        case CHANGE_UNDERENGINE_LEFT_RPM:
            return {
                ...state,
                leftRpm: payload,
            };
        case CHANGE_UNDERENGINE_RIGHT_RPM:
            return {
                ...state,
                rightRpm: payload,
            };
        case CHANGE_UNDER_ENGINE_SOG:
            return {
                ...state,
                sog: payload,
            };
        default:
            return state;
    }
};