import store from "..";
import { gettimestamp } from "../../Confiq/Helper";
import {
    CHANGE_TURN_OFF_DARK_THEME,
    CHANGE_TURN_ON_DARK_THEME,
    CHANGE_THEME
} from './type'

export const MobBtn = (val, message) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                console.log(`${message};${val};${gettimestamp()}`)
                var varMessage = new Paho.MQTT.Message(`${message};${val};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                // ToastAndroid.showWithGravityAndOffset(
                //     `${message};${val};${gettimestamp()}`,
                //     ToastAndroid.LONG,
                //     ToastAndroid.BOTTOM,
                //     25,
                //     50
                // );
            }
        } catch (error) {
        }
    }
}

export const ChangeColorftn = () => {
    return async dispatch => {
        if (store.getState().ColorReducer.isDarkThemeOn) {
            dispatch({ type: CHANGE_TURN_OFF_DARK_THEME, payload: null })
        } else {
            dispatch({ type: CHANGE_TURN_ON_DARK_THEME, payload: null })
        }
        dispatch({ type: CHANGE_THEME, payload: !store.getState().ColorReducer.isDarkThemeOn })
    }
}