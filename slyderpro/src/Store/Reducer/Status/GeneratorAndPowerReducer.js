import {
    CHANGE_GENERATOR_SWITCH,
    CHANGE_SYSTEM_RPM
} from '../../Actions/type'
const initialState = {
    GeneratorSwitch:false,
    rpm:0,
    starterBattery:"TBD",
    Kw:"TBD",
    hrs:" TBD ",
    battery24V:"TBD",
    hvBattery:"TBD",

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_GENERATOR_SWITCH:
            return {
                ...state,
                GeneratorSwitch: payload,

            };
        case CHANGE_SYSTEM_RPM:
            return {
                ...state,
                rpm: payload,

            };
        default:
            return state;
    }
};