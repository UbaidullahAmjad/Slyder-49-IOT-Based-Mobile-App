import store from "..";
import { gettimestamp } from "../../Confiq/Helper";

import { CHANGE_WINDSPEED, CHANGE_AIR_TEMP_PRESSURE,
     SAILING_LEFT_TWA , SAILING_CENTER_T
    } from './type';
import {
    ToastAndroid
} from 'react-native'

export const Increaseh = (val) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                console.log(`${val};${gettimestamp()}`)
                var varMessage = new Paho.MQTT.Message(`${val};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                // ToastAndroid.showWithGravityAndOffset(
                //     `${val};${gettimestamp()}`,
                //     ToastAndroid.LONG,
                //     ToastAndroid.BOTTOM,
                //     25,
                //     50
                // );
            }
        } catch (error) {
            console.log("error", error)
        }
    }
}

export const WeatherMqtt = () => {
    return async dispatch => {
        if (store.getState().Mqtt.client != null) {
            store.getState().Mqtt.client.onMessageArrived = (msg) => {
                WeatheronMessageArrived(msg, dispatch)
            }
        }
    }
}

export const WeatheronMessageArrived = (theMessage, dispatch) => {

    const split = theMessage.payloadString.split(';')

    if (split[6]) {
        var angle = split[6]
    } else {
        var angle = 0
    }
    if (split[0] == 'n2k' && split[1] == 'wind_data') {
        dispatch({ type: SAILING_LEFT_TWA, payload: angle })
        dispatch({ type: SAILING_CENTER_T, payload: angle })
        dispatch({
            type: CHANGE_WINDSPEED, payload: {
                WeatherSpeed: split[5],
                // Humidity: split[4],
                WindAngle: angle,
                TimeHour: split[split.length - 3]
            }
        })
    }
    else if (split[0] == 'n2k' && split[1] == 'environmental_params') {
        dispatch({
            type: CHANGE_AIR_TEMP_PRESSURE, payload: {
                AirTemp: split[6],
                AirPressure: split[7],
            }
        })
    }

}
