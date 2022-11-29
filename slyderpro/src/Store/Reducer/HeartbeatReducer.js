import {
    CHANGE_BMS24,
    CHANGE_BMS100,
    CHANGE_MODBUS,
    CHANGE_MOTOR,
    CHANGE_N2K,
    FALSE_HEART_BEAT
} from '../Actions/type';

const initialState = {
    bms24: false,
    bms100: false,
    modbus: false,
    motor: false,
    n2k: false

}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case FALSE_HEART_BEAT:
            return {
                ...state,
                n2k: false,
                bms24: false,
                bms100: false,
                modbus: false,
                motor: false

            };
        case CHANGE_N2K:
            return {
                ...state,
                n2k: true,
                bms24: false,
                bms100: false,
                modbus: false,
                motor: false

            };
        case CHANGE_MOTOR:
            return {
                ...state,
                n2k: false,
                bms24: false,
                bms100: false,
                modbus: false,
                motor: true

            };
        case CHANGE_MODBUS:
            return {
                ...state,
                n2k: false,
                bms24: false,
                bms100: false,
                modbus: true,
                motor: false

            };
        case CHANGE_BMS100:
            return {
                ...state,
                n2k: false,
                bms24: false,
                bms100: true,
                modbus: false,
                motor: false

            };
        case CHANGE_BMS24:
            return {
                ...state,
                n2k: false,
                bms24: true,
                bms100: false,
                modbus: false,
                motor: false

            };
        default:
            return state;
    }
};