import {BMS100} from '../../BMS100';
import {BMS24} from '../../BMS24';
import {CHANGE_BMS100, CHANGE_BMS24, CHANGE_MOTOR} from '../../type';
import {ElectricMotor} from './Module/ElectricMotor';

var count = 0;

export const ElectricData = theMessage => {
  return async dispatch => {
    const split = theMessage.payloadString.split(';');
    count = count + 1;
    console.log('ELECTRIC data::::::::::::::::::::::', count);

    if (split[0] == 'bms100') {
      BMS100(split, dispatch);
      dispatch({
        type: CHANGE_BMS100,
        payload: true,
      });
    }
    if (split[0] == 'bms24') {
      BMS24(split, dispatch);
      dispatch({
        type: CHANGE_BMS24,
        payload: true,
      });
    }
    if (split[0] == 'motor') {
      ElectricMotor(split, dispatch);
      dispatch({
        type: CHANGE_MOTOR,
        payload: true,
      });
    }
  };
};
