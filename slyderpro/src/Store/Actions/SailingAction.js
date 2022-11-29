import store from "..";
import { boolean, gettimestamp } from "../../Confiq/Helper";
import {
    CHANGE_RUDDER_POSITION,
    CHANGE_SAILING_HEADING, CHANGE_SAILING_LEFT_SPEED,
    SAILING_CENTER_DEPT, SAILING_CENTER_WATER_TEMP, CHANGE_SAILING_RIGHT_SOG,
    NORTH_DIRECTION, WEST_DIRECTION,
    CHANGE_SAILING_ETA,
    CHANGE_UNDERENGINE_ETA,
    UNDER_ENGINE_CENTRAL_SPEED
} from './type';
import { ReplaceDotandFixed } from "../../Confiq/Helper";
import {
    ToastAndroid
} from 'react-native'

export const sailingSwitchesStatusChange = (val, message, typeReducer) => {
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
            // if(error.message == 'AMQJS0011E Invalid state not connected.'){
            //     ToastAndroid.showWithGravityAndOffset(
            //         `Sylder are not connected with mqtt`,
            //         ToastAndroid.LONG,
            //         ToastAndroid.BOTTOM,
            //         25,
            //         50
            //     );
            // }
            console.log("sailingSwitchesStatusChange error", error.message)
        }
    }
}

export const SailingMqtt = () => {
    return async dispatch => {
        if (store.getState().Mqtt.client != null) {
            store.getState().Mqtt.client.onMessageArrived = (msg) => {
                SailingonMessageArrived(msg, dispatch)
            }
        }
    }
}

export const SailingonMessageArrived = (theMessage, dispatch) => {
    const split = theMessage.payloadString.split(';')
    if (split[0] == 'n2k' && split[1] == 'vessel_heading') {
        if (store.getState().SailingCenter.Heading != split[5]) {
            dispatch({
                type: CHANGE_SAILING_HEADING, payload: split[5]
            })

        }
    }
    else if (split[0] == 'n2k' && split[1] == 'rudder') {
        if (store.getState().SailingCenter.RudderPosition != split[7]) {
            dispatch({
                type: CHANGE_RUDDER_POSITION, payload: split[7]
            })

        }
    }
    else if (split[0] == 'n2k' && split[1] == 'environmental_params') {
        if (store.getState().SailingCenter.waterTemp != split[5]) {
            dispatch({
                type: SAILING_CENTER_WATER_TEMP, payload: split[5],
            })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'water_depth') {

        if (store.getState().SailingCenter.Dept != split[5]) {
            dispatch({
                type: SAILING_CENTER_DEPT, payload: split[5]
            })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'speed_water_ref') {
        if (store.getState().SailingLeft.SailingSpeed != split[5])
            dispatch({
                type: CHANGE_SAILING_LEFT_SPEED, payload: split[5]
            })
        dispatch({
            type: UNDER_ENGINE_CENTRAL_SPEED, payload: split[5]
        })
    }
    else if (split[0] == 'n2k' && split[1] == 'cog_sog_rapid_update') {
        if (store.getState().SailingRight.sog != split[7]) {
            dispatch({
                type: CHANGE_SAILING_RIGHT_SOG, payload: split[7]
            })
        }

    }
    else if (split[0] == 'n2k' && split[1] == 'nav_data') {
        if (store.getState().SailingRight.eta != split[10]) {
            dispatch({
                type: CHANGE_SAILING_ETA, payload: split[10]
            })
            dispatch({
                type: CHANGE_UNDERENGINE_ETA, payload: split[10]
            })
        }

    }
    // else if (split[0] == 'n2k' && split[1] == 'position_rapid_update') {
    //     let NorthDoirection = split[9][0] + " " + split[6] + '°' + split[7] + '’' + ReplaceDotandFixed(split[8]) + '’’'
    //     let West = split[13][0] + " " + split[10] + '°' + split[11] + '’' + ReplaceDotandFixed(split[12]) + '’’'
    //     dispatch({ type: NORTH_DIRECTION, payload: NorthDoirection })
    //     dispatch({ type: WEST_DIRECTION, payload: West })
    // }
}
