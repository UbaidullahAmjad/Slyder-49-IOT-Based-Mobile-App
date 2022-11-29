
import store from "..";
import { boolean, gettimestamp } from "../../Confiq/Helper";
import {
    LOWERDECK_RIGHT_AIRCON, LOWERDECK_RIGHT_BILGE_PUMP_AFT,
    LOWERDECK_RIGHT_BILGE_PUMP_CENTER, LOWERDECK_RIGHT_GRAY_WATER_PUMP,
    LOWERDECK_RIGHT_TOLIT, LOWERDECK_RIGHT_VENTILATION, LOWER_DECK_LIGHT_BB,
    LOWER_DECK_LIGHT_STB,
    LOWER_DECK_OUTLETS_BB,
    LOWER_DECK_OUTLETS_STB,
    SYSTEM_MAIN_LEFT_AIR_CON, SYSTEM_MAIN_LEFT_BLIGE_AFT,
    SYSTEM_MAIN_LEFT_BOILER, SYSTEM_MAIN_LEFT_GRAY_WATER_PUMP,
    SYSTEM_MAIN_LEFT_TOLIT,
    SYSTEM_MAIN_LEFT_VENTILATION, SYSTEM_MAIN_LEFT_WASHING_MACHINE,
    SYSTEM_MAIN_LEFT_WATER_PUMP, SYSTEM_MAIN_LEF_BILGE_PUMP_CENTER,
    UPPER_DECK_LIGHT_OUTSIDE, UPPER_DECK_LIGHT_SALON, UPPER_DECK_NAV_EQUIPMENT,
    UPPER_DECK_OUTLETS_SALON
} from './type';
import {
    ToastAndroid
}from 'react-native'
export const LowerDeckSwitchesStatusChange = (val, message, typeReducer) => {
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
        }
    }
}
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
export const LowerDeckMqtt = () => {
    return async dispatch => {
        if(store.getState().Mqtt.client != null){
        store.getState().Mqtt.client.onMessageArrived = (msg) => {
            SystemonMessageArrived(msg, dispatch)
        }
    }
    }
}

export const SystemonMessageArrived = (theMessage, dispatch) => {
    const split = theMessage.payloadString.split(';')
    if (split[0] == 'modbus' && split[1] == 'lower_deck_bb') {
        if (store.getState().LowerDeckLeftBtn.washingMachine != booleanRev(split[3])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_WASHING_MACHINE, payload: booleanRev(split[3])
            })
        }
        if (store.getState().LowerDeckLeftBtn.grayWaterPump != booleanRev(split[4])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_GRAY_WATER_PUMP, payload: booleanRev(split[4])
            })
        }
        if (store.getState().LowerDeckLeftBtn.toilet != booleanRev(split[5])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_TOLIT, payload: booleanRev(split[5])
            })
        }
        if (store.getState().LowerDeckLeftBtn.ventilation != booleanRev(split[6])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_VENTILATION, payload: booleanRev(split[6])
            })
        }
        if (store.getState().LowerDeckLeftBtn.bilgepumpcenter != booleanRev(split[8])) {
            dispatch({
                type: SYSTEM_MAIN_LEF_BILGE_PUMP_CENTER, payload: booleanRev(split[8])
            })
        }
        if (store.getState().LowerDeckLeftBtn.boiler != booleanRev(split[9])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_BOILER, payload: booleanRev(split[9])
            })
        }
        if (store.getState().LowerDeckLeftBtn.aircon != booleanRev(split[10])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_AIR_CON, payload: booleanRev(split[10])
            })
        }
        if (store.getState().LowerDeckLeftBtn.waterpump != booleanRev(split[7])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_WATER_PUMP, payload: booleanRev(split[7])
            })
        }
        if (store.getState().LowerDeckLeftBtn.bilgepumpaft != booleanRev(split[11])) {
            dispatch({
                type: SYSTEM_MAIN_LEFT_BLIGE_AFT, payload: booleanRev(split[11])
            })
        }

        // System right side btn value 
        if (store.getState().LowerDeckRightBtn.ventilation != booleanRev(split[6])) {
            dispatch({
                type: LOWERDECK_RIGHT_VENTILATION, payload: booleanRev(split[6])
            })
        }
        if (store.getState().LowerDeckRightBtn.aircon != booleanRev(split[10])) {
            dispatch({
                type: LOWERDECK_RIGHT_AIRCON, payload: booleanRev(split[10])
            })
        }
        if (store.getState().LowerDeckRightBtn.toilet != booleanRev(split[5])) {
            dispatch({
                type: LOWERDECK_RIGHT_TOLIT, payload: booleanRev(split[5])
            })
        }
        if (store.getState().LowerDeckRightBtn.grayWaterPump != booleanRev(split[4])) {
            dispatch({
                type: LOWERDECK_RIGHT_GRAY_WATER_PUMP, payload: booleanRev(split[4])
            })
        }
        if (store.getState().LowerDeckRightBtn.bilgepumpaft != booleanRev(split[11])) {
            dispatch({
                type: LOWERDECK_RIGHT_BILGE_PUMP_AFT, payload: booleanRev(split[11])
            })
        }
        if (store.getState().LowerDeckRightBtn.bilgepumpcenter != booleanRev(split[8])) {
            dispatch({
                type: LOWERDECK_RIGHT_BILGE_PUMP_CENTER, payload: booleanRev(split[8])
            })
        }


    }
    // ############################################################# System switches Switches ############################################################
    else if (split[0] == 'modbus' && split[1] == 'switches') {
        // Lower Deck Switches
        if (store.getState().LowerDeckSwitch.lightSBB != booleanRev(split[3])) {
            dispatch({
                type: LOWER_DECK_LIGHT_BB, payload: booleanRev(split[3])
            })
        }
        if (store.getState().LowerDeckSwitch.lightSTB != booleanRev(split[4])) {
            dispatch({
                type: LOWER_DECK_LIGHT_STB, payload: booleanRev(split[4])
            })
        }
        if (store.getState().LowerDeckSwitch.outletsBB != booleanRev(split[5])) {
            dispatch({
                type: LOWER_DECK_OUTLETS_BB, payload: booleanRev(split[5])
            })
        }
        if (store.getState().LowerDeckSwitch.outletsstb != booleanRev(split[6])) {
            dispatch({
                type: LOWER_DECK_OUTLETS_STB, payload: booleanRev(split[6])
            })
        }
        // UpperDeck Switches
        if (store.getState().UpperDeckSwitch.lightsalon != booleanRev(split[7])) {
            dispatch({
                type: UPPER_DECK_LIGHT_SALON, payload: booleanRev(split[7])
            })
        }
        if (store.getState().UpperDeckSwitch.outletsalon != booleanRev(split[8])) {
            dispatch({
                type: UPPER_DECK_OUTLETS_SALON, payload: booleanRev(split[8])
            })
        }
        if (store.getState().UpperDeckSwitch.lightOutside != booleanRev(split[9])) {
            dispatch({
                type: UPPER_DECK_LIGHT_OUTSIDE, payload: booleanRev(split[9])
            })
        }
        if (store.getState().UpperDeckSwitch.navEquipment != booleanRev(split[10])) {
            dispatch({
                type: UPPER_DECK_NAV_EQUIPMENT, payload: booleanRev(split[10])
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