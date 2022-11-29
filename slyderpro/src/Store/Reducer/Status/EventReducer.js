import {

} from '../../Actions/type'
const initialState = {
    event: [
        {
            warning: 'anchor alarm / 03:00 UTC / check position / reset alarm',
            p: 1,
        },
        {
            warning: 'check: time zone switch / system',
            p: 0,
        },
        {
            warning: 'check: diesel filter / interval pending in 10 engine hours',
            p: 0,
        },
        {
            warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
            p: 0,
        },
        {
            warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
            p: 1,
        },
        {
            warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
            p: 0,
        },
    ],
    totallog: ' TBD '



}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        default:
            return state;
    }
};