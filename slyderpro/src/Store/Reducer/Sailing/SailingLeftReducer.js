import {
    CHANGE_SAILING_LEFT_SPEED, SAILING_NAV_QUIPMENT, SAILING_HYDRO_GEN_BB
} from '../../Actions/type';

const initialState = {
    SailingSpeed: 0,
    SailingNavQuipment: false,
    hydro_gen_bb: false,
    awa:'TBD',
    aws:'TBD',
    log1:'TBD',
    log2:'TBD',
    Kw:'TBD',
}

export default (state = initialState, { type, payload }) => {
    
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_SAILING_LEFT_SPEED:
            return {
                ...state,
                SailingSpeed: payload,
            };
        case SAILING_NAV_QUIPMENT:
            return {
                ...state,
                SailingNavQuipment: payload,
            };
        case SAILING_HYDRO_GEN_BB:
            return {
                ...state,
                hydro_gen_bb: payload,
            };
        default:
            return state;
    }
};