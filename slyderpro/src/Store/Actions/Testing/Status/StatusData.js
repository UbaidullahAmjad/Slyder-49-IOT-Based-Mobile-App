import {CHANGE_MODBUS} from '../../type';
import {StatusModus} from './Module/StatusModus';
var count = 0;

export const StatusData = theMessage => {
  return async dispatch => {
    const split = theMessage.payloadString.split(';');
    count = count + 1;
    console.log('STATUS data::::::::::::::::::::::', count);

    if (split[0] == 'modbus') {
      StatusModus(split, dispatch);
      dispatch({
        type: CHANGE_MODBUS,
        payload: true,
      });
    }
  };
};
