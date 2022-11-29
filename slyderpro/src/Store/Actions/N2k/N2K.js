import store from '../..';
import {
    CHANGE_WINDSPEED, CHANGE_AIR_TEMP_PRESSURE,
    SAILING_LEFT_TWA, SAILING_CENTER_T, CHANGE_UNDERENGINE_HEADING, CHANGE_UNDERENGINE_RUDDER_POSITION,
    CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH,
    CHANGE_UNDERENGINE_LEFT_WATER_TEMP, NORTH_DIRECTION, WEST_DIRECTION, UNDER_ENGINE_DTW, SAILING_DTW,
    CHANGE_SAILING_RIGHT_SOG, CHANGE_SAILING_HEADING, CHANGE_RUDDER_POSITION, SAILING_CENTER_WATER_TEMP,
    SAILING_CENTER_DEPT, CHANGE_SAILING_LEFT_SPEED, UNDER_ENGINE_CENTRAL_SPEED, CHANGE_SAILING_ETA, CHANGE_UNDERENGINE_ETA
} from '../../Actions/type';

export const N2K = (split, dispatch) => {
    if (split[6]) {
        var angle = split[6]
    } else {
        var angle = 0
    }
    if (split[0] == 'n2k' && split[1] == 'wind_data') {
        dispatch({ type: SAILING_LEFT_TWA, payload: angle })
        dispatch({ type: SAILING_CENTER_T, payload: angle })
        dispatch({
            type: CHANGE_WINDSPEED, payload: {
                WeatherSpeed: split[5],
                // Humidity: split[4],
                WindAngle: angle,
                TimeHour: split[split.length - 3]
            }
        })
    }
    else if (split[0] == 'n2k' && split[1] == 'environmental_params') {
        dispatch({
            type: CHANGE_AIR_TEMP_PRESSURE, payload: {
                AirTemp: split[6],
                AirPressure: split[7],
            }
        })
        if (store.getState().UnderEngineleftLeftSide.Watertemp != split[5]) {
            dispatch({
                type: CHANGE_UNDERENGINE_LEFT_WATER_TEMP, payload: split[5],
            })
        }
        if (store.getState().SailingCenter.waterTemp != split[5]) {
            dispatch({
                type: SAILING_CENTER_WATER_TEMP, payload: split[5],
            })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'vessel_heading') {
        if (store.getState().UnderEngineCenter.Heading != split[5]) {
            dispatch({
                type: CHANGE_UNDERENGINE_HEADING, payload: split[5]
            })

        }
        if (store.getState().SailingCenter.Heading != split[5]) {
            dispatch({
                type: CHANGE_SAILING_HEADING, payload: split[5]
            })

        }
    }
    else if (split[0] == 'n2k' && split[1] == 'rudder') {
        if (store.getState().UnderEngineCenter.RudderPosition != split[7]) {
            dispatch({
                type: CHANGE_UNDERENGINE_RUDDER_POSITION, payload: split[7]
            })

        }
        if (store.getState().SailingCenter.RudderPosition != split[7]) {
            dispatch({
                type: CHANGE_RUDDER_POSITION, payload: split[7]
            })

        }
    }
    else if (split[0] == 'n2k' && split[1] == 'water_depth') {
        if (store.getState().RightSideUnderEngine.WaterDept != split[5]) {
            dispatch({
                type: CHANGE_UNDERENGINE_RIGHT_WATER_DEPTH, payload: split[5]
            })
        }
        if (store.getState().SailingCenter.Dept != split[5]) {
            dispatch({
                type: SAILING_CENTER_DEPT, payload: split[5]
            })
        }

    }
    else if (split[0] == 'n2k' && split[1] == 'position_rapid_update') {

        // Don't forget to uncomment the code if we call action separatly fro mqtt    
        let NorthDoirection = split[9][0] + " " + split[6] + '°' + split[7] + "." + split[8].split('.').join("").substring(0, 4) + '’'
        let West = split[13][0] + " " + split[10] + '°' + split[11] + "." + split[12].split('.').join("").substring(0, 4) + '’'
        if (store.getState().GPSDirection.North != NorthDoirection) {
            dispatch({ type: NORTH_DIRECTION, payload: NorthDoirection })
        }
        if (store.getState().GPSDirection.West != West) {
            dispatch({ type: WEST_DIRECTION, payload: West })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'nav_data') {
        if (store.getState().RightSideUnderEngine.dwt != split[5]) {
            dispatch({
                type: UNDER_ENGINE_DTW, payload: split[5],
            })
            dispatch({
                type: SAILING_DTW, payload: split[5],
            })
        }
        if (store.getState().SailingRight.eta != split[10]) {
            dispatch({
                type: CHANGE_SAILING_ETA, payload: split[10]
            })
            dispatch({
                type: CHANGE_UNDERENGINE_ETA, payload: split[10]
            })
        }
    }
    else if (split[0] == 'n2k' && split[1] == 'cog_sog_rapid_update') {
        if (store.getState().SailingRight.sog != split[7]) {
            dispatch({
                type: CHANGE_SAILING_RIGHT_SOG, payload: split[7]
            })
        }

    }
    else if (split[0] == 'n2k' && split[1] == 'speed_water_ref') {
        if (store.getState().SailingLeft.SailingSpeed != split[5])
            dispatch({
                type: CHANGE_SAILING_LEFT_SPEED, payload: split[5]
            })
        dispatch({
            type: UNDER_ENGINE_CENTRAL_SPEED, payload: split[5]
        })
    }

}