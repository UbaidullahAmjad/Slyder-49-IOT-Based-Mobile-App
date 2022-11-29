import {CHANGE_AIR_TEMP_PRESSURE, CHANGE_WINDSPEED} from '../../../type';

export const N2KWeather = (split, dispatch) => {
  if (split[6]) {
    var angle = split[6];
  } else {
    var angle = 0;
  }
  if (split[0] == 'n2k' && split[1] == 'wind_data') {
    dispatch({
      type: CHANGE_WINDSPEED,
      payload: {
        WeatherSpeed: split[5],
        // Humidity: split[4],
        WindAngle: angle,
        TimeHour: split[split.length - 3],
      },
    });
  } else if (split[0] == 'n2k' && split[1] == 'environmental_params') {
    dispatch({
      type: CHANGE_AIR_TEMP_PRESSURE,
      payload: {
        AirTemp: split[6],
        AirPressure: split[7],
      },
    });
  }
};
