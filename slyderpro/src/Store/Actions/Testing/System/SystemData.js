import {CHANGE_MODBUS} from '../../type';
import {SystemModus} from './Module/SystemModus';
var count = 0;

export const SystemData = theMessage => {
  return async dispatch => {
    const split = theMessage.payloadString.split(';');
    count = count + 1;
    console.log('SYSTEM data::::::::::::::::::::::', count);

    if (split[0] == 'modbus') {
      SystemModus(split, dispatch);
      dispatch({
        type: CHANGE_MODBUS,
        payload: true,
      });
    }
  };
};
