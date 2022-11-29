import {CHANGE_N2K} from '../../type';
import {N2KWeather} from './Module/N2KWeather';
var count = 0;

export const WeatherData = theMessage => {
  return async dispatch => {
    const split = theMessage.payloadString.split(';');
    count = count + 1;
    console.log('WEATHER data::::::::::::::::::::::', count);

    if (split[0] == 'n2k') {
      N2KWeather(split, dispatch);
      dispatch({
        type: CHANGE_N2K,
        payload: true,
      });
    }
  };
};
