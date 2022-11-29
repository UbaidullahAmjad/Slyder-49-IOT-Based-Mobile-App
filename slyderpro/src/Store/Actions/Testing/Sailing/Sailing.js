import {CHANGE_N2K} from '../../type';
import {N2KSailing} from './Module/N2KSailing';
var count = 0;

export const SailingData = theMessage => {
  return async dispatch => {
    const split = theMessage.payloadString.split(';');
    count = count + 1;
    console.log('SAILING data::::::::::::::::::::::', count);
    if (split[0] == 'n2k') {
      N2KSailing(split, dispatch);
      dispatch({
        type: CHANGE_N2K,
        payload: true,
      });
    }
  };
};
