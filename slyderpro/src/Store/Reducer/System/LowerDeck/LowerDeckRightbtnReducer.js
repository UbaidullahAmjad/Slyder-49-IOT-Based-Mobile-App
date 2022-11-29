import {
    LOWERDECK_RIGHT_ICE_CUBE_MAKER,
    LOWERDECK_RIGHT_FREEZER,
    LOWERDECK_RIGHT_VENTILATION,
    LOWERDECK_RIGHT_WATER_PUMP_AIRCON,
    LOWERDECK_RIGHT_GRAY_WATER_PUMP,
    LOWERDECK_RIGHT_TOLIT,
    LOWERDECK_RIGHT_BILGE_PUMP_CENTER,
    LOWERDECK_RIGHT_BILGE_PUMP_AFT,
    LOWERDECK_RIGHT_AIRCON,
    LOWERDECK_RIGHT_WATERMAKER
} from '../../../Actions/type';

const initialState = {
    grayWaterPump: false,
    toilet: false,
    ventilation: false,
    bilgepumpcenter: false,
    bilgepumpaft: false,
    ice_cube_maker:false,
    freezer:false,
    aircon:false,
    watermaker:false,
    waterPumpAirCon:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case  LOWERDECK_RIGHT_ICE_CUBE_MAKER:
            return {
                ...state,
                ice_cube_maker: payload,

            };
        case  LOWERDECK_RIGHT_FREEZER:
            return {
                ...state,
                freezer: payload,

            };
        case  LOWERDECK_RIGHT_AIRCON:
            return {
                ...state,
                aircon: payload,

            };
        case LOWERDECK_RIGHT_WATERMAKER:
            return {
                ...state,
                watermaker: payload,

            };
        case LOWERDECK_RIGHT_WATER_PUMP_AIRCON:
            return {
                ...state,
                waterPumpAirCon: payload,

            };
        case LOWERDECK_RIGHT_BILGE_PUMP_AFT:
            return {
                ...state,
                bilgepumpaft: payload,

            };
        case LOWERDECK_RIGHT_BILGE_PUMP_CENTER:
            return {
                ...state,
                bilgepumpcenter: payload,

            };
        case LOWERDECK_RIGHT_VENTILATION:
            return {
                ...state,
                ventilation: payload,

            };
        case LOWERDECK_RIGHT_TOLIT:
            return {
                ...state,
                toilet: payload,

            };
        case LOWERDECK_RIGHT_GRAY_WATER_PUMP:
            return {
                ...state,
                grayWaterPump: payload,

            };

        default:
            return state;
    }
};