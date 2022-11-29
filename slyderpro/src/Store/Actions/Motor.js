import store from "..";
import {
    CHANGE_LEFT_UNDERENGINE_MOTOR, CHANGE_RIGHT_UNDERENGINE_MOTOR,
    CHANGE_UNDERENGINE_LEFT_RPM, CHANGE_UNDERENGINE_RIGHT_RPM,
    CHANGE_ELECTRIC_RPM_MOTORMT2, CHANGE_SYSTEM_RPM
} from './type';
export const Motor = (split, dispatch) => {
    if (split[0] == 'motor' && split[1] == 'mt2') {
        if (store.getState().EngineController.LeftControllerEngine.controllerTemp != split[7] && store.getState().EngineController.LeftControllerEngine.engineTemp != split[8]) {
            dispatch({
                type: CHANGE_LEFT_UNDERENGINE_MOTOR, payload: { controllerTemp: split[7], engineTemp: split[8] }
            })
        }
        if (store.getState().UnderEngineCenter.leftRpm != split[2]) {
            dispatch({
                type: CHANGE_UNDERENGINE_LEFT_RPM, payload: split[2]
            })
        }
    }
    else if (split[0] == 'motor' && split[1] == 'mt1') {
        if (store.getState().EngineController.rightControllerEngine.controllerTemp != split[7] && store.getState().EngineController.rightControllerEngine.engineTemp != split[8]) {
            dispatch({
                type: CHANGE_RIGHT_UNDERENGINE_MOTOR, payload: { controllerTemp: split[7], engineTemp: split[8] }
            })
        }
        if (store.getState().UnderEngineCenter.rightRpm != split[2]) {
            dispatch({
                type: CHANGE_UNDERENGINE_RIGHT_RPM, payload: split[2]
            })
        }
    }
    else if (split[0] == 'motor' && split[1] == 'mt3') {
        if (store.getState()?.GeneratorAndPower?.rpm != split[2]) {
            dispatch({
                type: CHANGE_SYSTEM_RPM, payload: split[2]
            })
        }
        if (store.getState()?.ElectricBottom?.rpm != split[2]) {
            dispatch({
                type: CHANGE_ELECTRIC_RPM_MOTORMT2, payload: split[2]
            })
        }
    }
}