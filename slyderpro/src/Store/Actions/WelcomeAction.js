import { gettimestamp, boolean } from "../../Confiq/Helper";
import store from "..";
import {
    UPPERDECK_LEFT_AIR_CON,
    SYSTEM_MAIN_LEFT_AIR_CON,
    LOWERDECK_RIGHT_AIRCON,
    CHANGE_WELCOME_AIRCON
}from './type'
import {
    ToastAndroid
}from 'react-native'

export const WelcomeSwitchButton = (val, message, typeReducer) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                var varMessage = new Paho.MQTT.Message(`${message};${boolean(val)};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                dispatch({ type: typeReducer, payload: val })
                // ToastAndroid.showWithGravityAndOffset(
                //     `${message};${boolean(val)};${gettimestamp()}`,
                //     ToastAndroid.LONG,
                //     ToastAndroid.BOTTOM,
                //     25,
                //     50
                // );
            }
        } catch (error) {
            console.log("WelcomeSwtichButton error", error)
        }
    }
}
export const ChangeAirCondition = (val, message) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                var varMessage = new Paho.MQTT.Message(`${message};${boolean(val)};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                dispatch({ type: UPPERDECK_LEFT_AIR_CON, payload: val })
                dispatch({ type: SYSTEM_MAIN_LEFT_AIR_CON, payload: val })
                dispatch({ type: LOWERDECK_RIGHT_AIRCON, payload: val })
                dispatch({ type: CHANGE_WELCOME_AIRCON, payload: val })
                // ToastAndroid.showWithGravityAndOffset(
                //     `${message};${boolean(val)};${gettimestamp()}`,
                //     ToastAndroid.LONG,
                //     ToastAndroid.BOTTOM,
                //     25,
                //     50
                // );
            }
        } catch (error) {
            console.log("WelcomeSwtichButton error", error)
        }
    }
}


