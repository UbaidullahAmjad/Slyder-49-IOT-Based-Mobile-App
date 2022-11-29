import {
    CHANGE_MQTT_CLIENT,
    CHANGE_DECIMAL_FORMAT,
    CHANGE_BMS24,
    CHANGE_BMS100,
    CHANGE_MODBUS,
    CHANGE_MOTOR,
    CHANGE_N2K
} from '../Actions/type';

const initialState = {
    client: null,
    decimalFormat: true, // True for Dot and false for comma 
    // bms24: false,
    // bms100: false,
    // modbus: false,
    // motor: false,
    // n2k: false

}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        // case CHANGE_N2K:
        //     return {
        //         ...state,
        //         n2k: payload,

        //     };
        // case CHANGE_MOTOR:
        //     return {
        //         ...state,
        //         motor: payload,

        //     };
        // case CHANGE_MODBUS:
        //     return {
        //         ...state,
        //         modbus: payload,

        //     };
        // case CHANGE_BMS100:
        //     return {
        //         ...state,
        //         bms100: payload,

        //     };
        // case CHANGE_BMS24:
        //     return {
        //         ...state,
        //         bms24: payload,

        //     };
        case CHANGE_MQTT_CLIENT:
            return {
                ...state,
                client: payload,

            };
        case CHANGE_DECIMAL_FORMAT:
            return {
                ...state,
                decimalFormat: payload,

            };

        default:
            return state;
    }
};