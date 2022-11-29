import store from '../../../..';
import {
  CHANGE_FRESHWATER_BB,
  CHANGE_FRESHWATER_STB,
  CHANGE_BLACKWATER_BB,
  CHANGE_BLACKWATER_STB,
  CHANGE_DIESEL,
  CHANGE_GENERATOR_SWITCH,
} from '../../../type';

export const StatusModus = (split, dispatch) => {
  if (split[0] == 'modbus' && split[1] == 'status') {
    if (store.getState().WaterDieselEvent.freshWaterbb != split[5]) {
      dispatch({
        type: CHANGE_FRESHWATER_BB,
        payload: split[5],
      });
    }
    if (store.getState().WaterDieselEvent.freshwaterstb != split[4]) {
      dispatch({
        type: CHANGE_FRESHWATER_STB,
        payload: split[4],
      });
    }
    if (store.getState().WaterDieselEvent.blackwaterbb != split[7]) {
      dispatch({
        type: CHANGE_BLACKWATER_BB,
        payload: split[7],
      });
    }
    if (store.getState().WaterDieselEvent.blackwaterstb != split[6]) {
      dispatch({
        type: CHANGE_BLACKWATER_STB,
        payload: split[6],
      });
    }
    if (store.getState().WaterDieselEvent.diesel != split[8]) {
      dispatch({
        type: CHANGE_DIESEL,
        payload: split[8],
      });
    }
    if (
      store.getState().GeneratorAndPower.GeneratorSwitch != booleanRev(split[3])
    ) {
      dispatch({
        type: CHANGE_GENERATOR_SWITCH,
        payload: booleanRev(split[3]),
      });
    }
  }
};

function booleanRev(val) {
  if (val == 'False') {
    return false;
  } else {
    return true;
  }
}
