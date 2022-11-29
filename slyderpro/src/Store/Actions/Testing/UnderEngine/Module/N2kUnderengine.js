import store from '../../../..';
import {
  CHANGE_UNDERENGINE_ETA,
  CHANGE_UNDERENGINE_HEADING,
  CHANGE_UNDERENGINE_LEFT_WATER_TEMP,
  CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH,
  CHANGE_UNDERENGINE_RUDDER_POSITION,
  NORTH_DIRECTION,
  UNDER_ENGINE_CENTRAL_SPEED,
  UNDER_ENGINE_DTW,
  WEST_DIRECTION,
} from '../../../type';

export const N2Kunderengine = (split, dispatch) => {
  if (split[0] == 'n2k' && split[1] == 'environmental_params') {
    if (store.getState().UnderEngineleftLeftSide.Watertemp != split[5]) {
      dispatch({
        type: CHANGE_UNDERENGINE_LEFT_WATER_TEMP,
        payload: split[5],
      });
    }
  }
  if (split[0] == 'n2k' && split[1] == 'vessel_heading') {
    if (store.getState().UnderEngineCenter.Heading != split[5]) {
      dispatch({
        type: CHANGE_UNDERENGINE_HEADING,
        payload: split[5],
      });
    }
  }
  if (split[0] == 'n2k' && split[1] == 'rudder') {
    if (store.getState().UnderEngineCenter.RudderPosition != split[7]) {
      dispatch({
        type: CHANGE_UNDERENGINE_RUDDER_POSITION,
        payload: split[7],
      });
    }
  }
  if (split[0] == 'n2k' && split[1] == 'water_depth') {
    if (store.getState().RightSideUnderEngine.WaterDept != split[5]) {
      dispatch({
        type: CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH,
        payload: split[5],
      });
    }
  }
  if (split[0] == 'n2k' && split[1] == 'position_rapid_update') {
    // Don't forget to uncomment the code if we call action separatly fro mqtt
    let NorthDoirection =
      split[9][0] +
      ' ' +
      split[6] +
      '°' +
      split[7] +
      '.' +
      split[8].split('.').join('').substring(0, 4) +
      '’';
    let West =
      split[13][0] +
      ' ' +
      split[10] +
      '°' +
      split[11] +
      '.' +
      split[12].split('.').join('').substring(0, 4) +
      '’';
    if (store.getState().GPSDirection.North != NorthDoirection) {
      dispatch({type: NORTH_DIRECTION, payload: NorthDoirection});
    }
    if (store.getState().GPSDirection.West != West) {
      dispatch({type: WEST_DIRECTION, payload: West});
    }
  }
  if (split[0] == 'n2k' && split[1] == 'nav_data') {
    if (store.getState().RightSideUnderEngine.dwt != split[5]) {
      dispatch({
        type: UNDER_ENGINE_DTW,
        payload: split[5],
      });
    }
    if (store.getState().SailingRight.eta != split[10]) {
      dispatch({
        type: CHANGE_UNDERENGINE_ETA,
        payload: split[10],
      });
    }
  }

  if (split[0] == 'n2k' && split[1] == 'speed_water_ref') {
    if (store.getState().SailingLeft.SailingSpeed != split[5])
      dispatch({
        type: UNDER_ENGINE_CENTRAL_SPEED,
        payload: split[5],
      });
  }
};
