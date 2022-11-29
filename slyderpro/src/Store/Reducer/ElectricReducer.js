import {
    CHANGE_HV1,
    CHANGE_HV2,
    CHANGE_DC1,
    CHANGE_DC2,
    CHANGE_ELECTRIC_RPM_MOTORMT2
} from '../Actions/type';

const initialState = {
    hv1: {
        soc: 0,
        tempHct: 0
    },
    hv2: {
        soc: 0,
        tempHct: 0
    },


}

export default (state = initialState, { type, payload }) => {
    // console.log("payload:" ,payload)
    // console.log("type:" ,type)
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_HV1:
            return {
                ...state,
                hv1: { soc: payload.soc, tempHct: payload.tempHct },
            };
        case CHANGE_HV2:
            return {
                ...state,
                hv2: { soc: payload.soc, tempHct: payload.tempHct },
            };

        default:
            return state;
    }
};