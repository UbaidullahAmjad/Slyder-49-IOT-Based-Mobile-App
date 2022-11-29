import {
    CHANGE_DC1,
    CHANGE_DC2
} from '../../Actions/type';

const initialState = {
    dc1: {
        soc: 0,
        temp: "TBD"
    },
    dc2: {
        soc: 0,
        temp: "TBD"
    },
    A1: "TBD",
    A2: "TBD",
    A3: "TBD",
    A4: "TBD",
    A5: "TBD",
    A6: "TBD",
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_DC2:
            return {
                ...state,
                dc2: { soc: payload.soc, temp: "TBD" },
            };
        case CHANGE_DC1:
            return {
                ...state,
                dc1: { soc: payload.soc, temp: "TBD" },
            };
        default:
            return state;
    }
};