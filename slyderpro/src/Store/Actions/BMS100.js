import {
    CHANGE_HV1,
    CHANGE_HV2
} from './type';
import store from '..';
export const BMS100 = (split, dispatch) => {
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
}