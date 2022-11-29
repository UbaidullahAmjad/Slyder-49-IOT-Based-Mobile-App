import store from '..';
import {
    CHANGE_DC1,
    CHANGE_DC2, CHANGE_HV1,
    CHANGE_HV2,
    CHANGE_ELECTRIC_RPM_MOTORMT2,
   
} from './type';
export const ElectricMqtt = () => {
    return async dispatch => {
        if (store.getState().Mqtt.client != null) {
            store.getState().Mqtt.client.onMessageArrived = (msg) => {
                ElectriconMessageArrived(msg, dispatch)
            }
        }
    }
}

export const ElectriconMessageArrived = (theMessage, dispatch) => {
    const split = theMessage.payloadString.split(';')
    if (split[0] == 'bms100' && split[1] == 'bat1') {
        if (store.getState().Electric.hv1.soc == split[8] && store.getState().Electric.hv1.tempHct == split[6]) {

        } else {
            dispatch({
                type: CHANGE_HV1, payload: {
                    soc: split[8],
                    tempHct: split[6]
                }
            })

        }
    }
    else if (split[0] == 'bms100' && split[1] == 'bat2') {
        if (store.getState().Electric.hv2.soc == split[8] && store.getState().Electric.hv2.tempHct == split[6]) {

        } else {
            dispatch({
                type: CHANGE_HV2, payload: {
                    soc: split[8],
                    tempHct: split[6]
                }
            })
        }

    }
    else if (split[0] == 'bms24' && split[1] == 'bat1') {
        if (store.getState().ElectricTop.dc1.soc == split[5]) {

        } else {
            dispatch({
                type: CHANGE_DC1, payload: {
                    soc: split[5],
                }
            })
        }
    }
    else if (split[0] == 'bms24' && split[1] == 'bat2') {
        if (store.getState().ElectricTop.dc2.soc == split[5]) {

        } else {
            dispatch({
                type: CHANGE_DC2, payload: {
                    soc: split[5],
                }
            })
        }
    }
    else if (split[0] == 'motor' && split[1] == 'mt3') {
        if (store.getState()?.ElectricBottom?.rpm != split[2]) {
            dispatch({
                type: CHANGE_ELECTRIC_RPM_MOTORMT2, payload: split[2]
            })
        }
    }
}
