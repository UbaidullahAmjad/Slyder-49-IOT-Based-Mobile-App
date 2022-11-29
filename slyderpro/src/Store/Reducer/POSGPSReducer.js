import {
    NORTH_DIRECTION,
    WEST_DIRECTION
} from '../Actions/type';

const initialState = {
    North: 'N 00°0.0000’',
    West: 'W 000°0.0000’'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case NORTH_DIRECTION:
            return {
                ...state,
                North: payload,
            };
        case WEST_DIRECTION:
            return {
                ...state,
                West: payload,
            };
        default:
            return state;
    }
};
