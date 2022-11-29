import {
    CHANGE_ELECTRIC_RPM_MOTORMT2
} from '../../Actions/type';

const initialState = {
    rpm: 0,
    Kw:'TBD',
    engbb:"TBD",
    engstb:"TBD",
    ac:"TBD",
    dc24:'TBD',
    dc12:'TBD'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_ELECTRIC_RPM_MOTORMT2:
            return {
                ...state,
                rpm: payload,
            };
        default:
            return state;
    }
};