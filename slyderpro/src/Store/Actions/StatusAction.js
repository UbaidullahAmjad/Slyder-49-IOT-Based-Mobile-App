import store from "..";
import { boolean, gettimestamp } from "../../Confiq/Helper";
import {
    CHANGE_BLACKWATER_BB, CHANGE_BLACKWATER_STB, CHANGE_DIESEL, CHANGE_FRESHWATER_BB,
    CHANGE_FRESHWATER_STB, CHANGE_GENERATOR_SWITCH, CHANGE_SYSTEM_RPM,
    CHANGE_MODBUS,
    CHANGE_MOTOR,

} from './type';
import {
    ToastAndroid
} from 'react-native'

export const GeneratorSwitch = (val) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                var varMessage = new Paho.MQTT.Message(`slyderapp;status;generator;generator_switch;${boolean(val)};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                dispatch({ type: CHANGE_GENERATOR_SWITCH, payload: val })
                // ToastAndroid.showWithGravityAndOffset(
                //     `slyderapp;status;generator;generator_switch;${boolean(val)};${gettimestamp()}`,
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

export const StartGenerator = (val) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                console.log(`slyderapp;status;generator;generator_start;${val};${gettimestamp()}`)
                var varMessage = new Paho.MQTT.Message(`slyderapp;status;generator;generator_start;${val};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                // ToastAndroid.showWithGravityAndOffset(
                //     `slyderapp;status;generator;generator_start;${val};${gettimestamp()}`,
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

export const StopGenerator = (val) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                console.log(`slyderapp;status;generator;generator_stop;${val};${gettimestamp()}`)
                var varMessage = new Paho.MQTT.Message(`slyderapp;status;generator;generator_stop;${val};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                // ToastAndroid.showWithGravityAndOffset(
                //     `slyderapp;status;generator;generator_stop;${val};${gettimestamp()}`,
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

export const IncreaseKw = (val) => {
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

export const StatusMqtt = () => {
    return async dispatch => {
        if (store.getState().Mqtt.client != null) {
            store.getState().Mqtt.client.onMessageArrived = (msg) => {
                StatusOnMessageArrived(msg, dispatch)
            }
        }
    }
}

export const StatusOnMessageArrived = (theMessage, dispatch) => {
    const split = theMessage.payloadString.split(';')
    if (split[0] == 'modbus' && split[1] == 'status') {
        if (store.getState().WaterDieselEvent.freshWaterbb != split[5]) {
            dispatch({
                type: CHANGE_FRESHWATER_BB, payload: split[5]
            })
        }
        if (store.getState().WaterDieselEvent.freshwaterstb != split[4]) {
            dispatch({
                type: CHANGE_FRESHWATER_STB, payload: split[4]
            })
        }
        if (store.getState().WaterDieselEvent.blackwaterbb != split[7]) {
            dispatch({
                type: CHANGE_BLACKWATER_BB, payload: split[7]
            })
        }
        if (store.getState().WaterDieselEvent.blackwaterstb != split[6]) {
            dispatch({
                type: CHANGE_BLACKWATER_STB, payload: split[6]
            })
        }
        if (store.getState().WaterDieselEvent.diesel != split[8]) {
            dispatch({
                type: CHANGE_DIESEL, payload: split[8]
            })
        }
        if (store.getState().GeneratorAndPower.GeneratorSwitch != booleanRev(split[3])) {
            dispatch({
                type: CHANGE_GENERATOR_SWITCH, payload: booleanRev(split[3])
            })
        }
    }
    else if (split[0] == 'motor' && split[1] == 'mt3') {
        if (store.getState()?.GeneratorAndPower?.rpm != split[2]) {
            dispatch({
                type: CHANGE_SYSTEM_RPM, payload: split[2]
            })
        }
    }
}

function booleanRev(val) {
    if (val == "False") {
        return false
    } else {
        return true
    }
}

export const statusColorStatus = (type, low, reserve) => {
    return async dispatch => {
        dispatch({ type: type, payload: { low: low, reserve: reserve } })
        // ToastAndroid.showWithGravityAndOffset(
        //     `Low: ${low} , Reserve: ${reserve}`,
        //     ToastAndroid.LONG,
        //     ToastAndroid.BOTTOM,
        //     25,
        //     50
        // );
    }
}
