import {
    CHANGE_WINDSPEED,
    CHANGE_AIR_TEMP_PRESSURE
} from '../Actions/type'

const initialState = {
    WeatherSpeed: '0',
    AirTemp: '0',
    Humidity: 'TBD',
    AirPressure: '0',
    WindAngle: '0',
    TimeHour: 0,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DISCONNECTED':
            return initialState
        case CHANGE_WINDSPEED:
            return {
                ...state,
                WeatherSpeed: payload.WeatherSpeed,
                WindAngle: payload.WindAngle,
                TimeHour: payload.TimeHour,
            }
        case CHANGE_AIR_TEMP_PRESSURE:
            return {
                ...state,
                AirTemp: payload.AirTemp,
                AirPressure: payload.AirPressure,
            };
        default:
            return state;
    }
};