
import store from "..";
import { boolean, gettimestamp } from "../../Confiq/Helper";
import {
    ToastAndroid
}from 'react-native'
export const UpperDeckSwitchesStatusChange = (val, message, typeReducer) => {
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
            console.log("UpperDeckSwitchesStatusChange error", error)
        }
    }
}

