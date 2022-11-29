import {CHANGE_MOTOR, CHANGE_N2K} from '../../type';
import {Motor} from './Module/Motor';
import {N2Kunderengine} from './Module/N2kUnderengine';
var count = 0;

export const underengineData = theMessage => {
  return async dispatch => {
    const split = theMessage.payloadString.split(';');
    count = count + 1;
    console.log('UNDERENGINE data::::::::::::::::::::::', count);
    if (split[0] == 'motor') {
      Motor(split, dispatch);
      dispatch({
        type: CHANGE_MOTOR,
        payload: true,
      });
    }
    if (split[0] == 'n2k') {
      N2Kunderengine(split, dispatch);
      dispatch({
        type: CHANGE_N2K,
        payload: true,
      });
    }
  };
};
