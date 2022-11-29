import {
    CHANGE_GOODBYE_INHARBOUR,
    CHANGE_GOODBYE_ATANCHOR,
    CHANGE_GOODBYE_LONGTERM
} from '../../Actions/type'
const initialState = {
    InHarbour: false,
    AtAnchor: false,
    LongTerm: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_GOODBYE_INHARBOUR:
            return {
                ...state,
                InHarbour: payload,
            };

        case CHANGE_GOODBYE_ATANCHOR:
            return {
                ...state,
                AtAnchor: payload,
            };

        case CHANGE_GOODBYE_LONGTERM:
            return {
                ...state,
                LongTerm: payload,
            };

        default:
            return state;
    }
};