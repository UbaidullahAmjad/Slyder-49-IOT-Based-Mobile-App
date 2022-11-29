import {
    SYSTEM_MAIN_LEFT_WASHING_MACHINE,
    SYSTEM_MAIN_LEFT_GRAY_WATER_PUMP,
    SYSTEM_MAIN_LEFT_TOLIT,
    SYSTEM_MAIN_LEFT_VENTILATION,
    SYSTEM_MAIN_LEF_BILGE_PUMP_CENTER,
    SYSTEM_MAIN_LEFT_BOILER,
    SYSTEM_MAIN_LEFT_WATER_PUMP,
    SYSTEM_MAIN_LEFT_BLIGE_AFT,
    SYSTEM_MAIN_LEFT_AIR_CON

} from '../../../Actions/type';

const initialState = {
    washingMachine: false,
    grayWaterPump: false,
    toilet: false,
    ventilation: false,
    waterpump: false,
    bilgepumpcenter: false,
    boiler: false,
    bilgepumpaft: false,
    aircon: false



}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case SYSTEM_MAIN_LEFT_AIR_CON:
            return {
                ...state,
                aircon: payload,

            };
        case SYSTEM_MAIN_LEFT_BLIGE_AFT:
            return {
                ...state,
                bilgepumpaft: payload,

            };
        case SYSTEM_MAIN_LEFT_WATER_PUMP:
            return {
                ...state,
                waterpump: payload,

            };
        case SYSTEM_MAIN_LEFT_BOILER:
            return {
                ...state,
                boiler: payload,

            };
        case SYSTEM_MAIN_LEF_BILGE_PUMP_CENTER:
            return {
                ...state,
                bilgepumpcenter: payload,

            };
        case SYSTEM_MAIN_LEFT_VENTILATION:
            return {
                ...state,
                ventilation: payload,

            };
        case SYSTEM_MAIN_LEFT_TOLIT:
            return {
                ...state,
                toilet: payload,

            };
        case SYSTEM_MAIN_LEFT_GRAY_WATER_PUMP:
            return {
                ...state,
                grayWaterPump: payload,

            };
        case SYSTEM_MAIN_LEFT_WASHING_MACHINE:
            return {
                ...state,
                washingMachine: payload,

            };
        default:
            return state;
    }
};