import store from "..";
import { boolean, gettimestamp, ReplaceDotandFixed } from "../../Confiq/Helper";

import {
    ToastAndroid
} from 'react-native'

import {
    CHANGE_GENERATOR_SWITCH, CHANGE_LEFT_UNDERENGINE_MOTOR, CHANGE_RIGHT_UNDERENGINE_MOTOR,
    CHANGE_UNDERENGINE_HEADING, CHANGE_UNDERENGINE_LEFT_RPM,
    CHANGE_UNDERENGINE_LEFT_WATER_TEMP,
    CHANGE_UNDERENGINE_RIGHT_RPM, CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH,
    CHANGE_UNDERENGINE_RUDDER_POSITION,
    NORTH_DIRECTION,
    WEST_DIRECTION,
    UNDER_ENGINE_DTW,
    SAILING_DTW
} from './type';

export const resetbtnmqtt = (message) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                var varMessage = new Paho.MQTT.Message(`${message};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
            }
        } catch (error) {
            console.log("Retbtn error", error)
        }
    }
}

export const UnderEngineSwitchesStatusChange = (val, message, typeReducer) => {
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
            console.log("UnderEngineSwitchesStatusChange error", error)
        }
    }
}

export const GeneratorSwitch = (val) => {
    return async dispatch => {
        try {
            if (store.getState().Mqtt.client != null) {
                var varMessage = new Paho.MQTT.Message(`slyderapp;UnderEngine;generator;generator_switch;${boolean(val)};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                dispatch({ type: CHANGE_GENERATOR_SWITCH, payload: val })
                // ToastAndroid.showWithGravityAndOffset(
                //     `slyderapp;UnderEngine;generator;generator_switch;${boolean(val)};${gettimestamp()}`,
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
                var varMessage = new Paho.MQTT.Message(`slyderapp;UnderEngine;generator;generator_start;${val};${gettimestamp()}`);
                varMessage.destinationName = "boat/cmd";
                store.getState().Mqtt.client.send(varMessage);
                // ToastAndroid.showWithGravityAndOffset(
                //     `slyderapp;UnderEngine;generator;generator_start;${val};${gettimestamp()}`,
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
                var varMessage = new Paho.MQTT.Message(`slyderapp;UnderEngine;generator;generator_stop;${val};${gettimestamp()}`);
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

export const UnderEngineMqtt = () => {
    return async dispatch => {
        if (store.getState().Mqtt.client != null) {
            store.getState().Mqtt.client.onMessageArrived = (msg) => {
                UnderEngineonMessageArrived(msg, dispatch)
            }
        }
    }
}

export const UnderEngineonMessageArrived = (theMessage, dispatch) => {
    const split = theMessage.payloadString.split(';')
    if (split[0] == 'n2k' && split[1] == 'vessel_heading') {
        if (store.getState().UnderEngineCenter.Heading != split[5]) {
            dispatch({
                type: CHANGE_UNDERENGINE_HEADING, payload: split[5]
            })

        }
    }
    else if (split[0] == 'n2k' && split[1] == 'rudder') {
        if (store.getState().UnderEngineCenter.RudderPosition != split[7]) {
            dispatch({
                type: CHANGE_UNDERENGINE_RUDDER_POSITION, payload: split[7]
            })

        }
    }
    else if (split[0] == 'n2k' && split[1] == 'water_depth') {
        if (store.getState().RightSideUnderEngine.WaterDept != split[5]) {
            dispatch({
                type: CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH, payload: split[5]
            })
        }

    } 
    else if (split[0] == 'motor' && split[1] == 'mt2') {
        if (store.getState().EngineController.LeftControllerEngine.controllerTemp != split[7] && store.getState().EngineController.LeftControllerEngine.engineTemp != split[8]) {
            dispatch({
                type: CHANGE_LEFT_UNDERENGINE_MOTOR, payload: { controllerTemp: split[7], engineTemp: split[8] }
            })
        }
        if (store.getState().UnderEngineCenter.leftRpm != split[2]) {
            dispatch({
                type: CHANGE_UNDERENGINE_LEFT_RPM, payload: split[2]
            })
        }
    }
    else if (split[0] == 'motor' && split[1] == 'mt1') {
        if (store.getState().EngineController.rightControllerEngine.controllerTemp != split[7] && store.getState().EngineController.rightControllerEngine.engineTemp != split[8]) {
            dispatch({
                type: CHANGE_RIGHT_UNDERENGINE_MOTOR, payload: { controllerTemp: split[7], engineTemp: split[8] }
            })
        }
        if (store.getState().UnderEngineCenter.rightRpm != split[2]) {
            dispatch({
                type: CHANGE_UNDERENGINE_RIGHT_RPM, payload: split[2]
            })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'environmental_params') {
        // Below Dispatch change the value in Under Engine Water temperature
        if (store.getState().UnderEngineleftLeftSide.Watertemp != split[5]) {
            dispatch({
                type: CHANGE_UNDERENGINE_LEFT_WATER_TEMP, payload: split[5],
            })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'position_rapid_update') {

        // Don't forget to uncomment the code if we call action separatly fro mqtt    
        let NorthDoirection = split[9][0] + " " + split[6] + '°' + split[7] + "." + split[8].split('.').join("").substring(0, 4) + '’'
        let West = split[13][0] + " " + split[10] + '°' + split[11] + "." + split[12].split('.').join("").substring(0, 4) + '’'
        if (store.getState().GPSDirection.North != NorthDoirection) {
            dispatch({ type: NORTH_DIRECTION, payload: NorthDoirection })
        }
        if (store.getState().GPSDirection.West != West) {
            dispatch({ type: WEST_DIRECTION, payload: West })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'nav_data') {
        if (store.getState().RightSideUnderEngine.dwt != split[5]) {
            dispatch({
                type: UNDER_ENGINE_DTW, payload: split[5],
            })
            dispatch({
                type: SAILING_DTW, payload: split[5],
            })
        }
    }
}
