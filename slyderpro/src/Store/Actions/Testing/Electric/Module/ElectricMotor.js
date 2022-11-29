import store from '../../../..';
import {CHANGE_ELECTRIC_RPM_MOTORMT2} from '../../../type';

export const ElectricMotor = (split, dispatch) => {
  if (split[0] == 'motor' && split[1] == 'mt3') {
    if (store.getState()?.ElectricBottom?.rpm != split[2]) {
      dispatch({
        type: CHANGE_ELECTRIC_RPM_MOTORMT2,
        payload: split[2],
      });
    }
  }
};
