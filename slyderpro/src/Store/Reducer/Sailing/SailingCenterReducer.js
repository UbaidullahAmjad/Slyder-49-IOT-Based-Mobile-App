import {
    CHANGE_SAILING_HEADING,
    CHANGE_RUDDER_POSITION,
    SAILING_CENTER_WATER_TEMP,
    SAILING_CENTER_DEPT,
    SAILING_CENTER_T
} from '../../Actions/type';

const initialState = {
    Heading: 0,
    RudderPosition: 0,
    waterTemp: 0,
    Dept: 0,
    TImage:0

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case SAILING_CENTER_T:
            return {
                ...state,
                TImage: payload,

            };
        case SAILING_CENTER_DEPT:
            return {
                ...state,
                Dept: payload,

            };
        case SAILING_CENTER_WATER_TEMP:
            return {
                ...state,
                waterTemp: payload,

            };
        case CHANGE_SAILING_HEADING:
            return {
                ...state,
                Heading: payload,

            };
        case CHANGE_RUDDER_POSITION:
            return {
                ...state,
                RudderPosition: payload,

            };
        default:
            return state;
    }
};