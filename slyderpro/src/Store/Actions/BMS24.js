import store from '..';
import {
    CHANGE_DC1,
    CHANGE_DC2
} from './type';
export const BMS24 = (split, dispatch) => {
    if (split[0] == 'bms24' && split[1] == 'bat1') {
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
}