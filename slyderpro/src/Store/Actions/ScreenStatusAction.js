import {CHANGE_CURRENT_SCREEN} from './type';

export const ChangedScreen = val => {
  return async dispatch => {
    dispatch({type: CHANGE_CURRENT_SCREEN, payload: val});
  };
};
