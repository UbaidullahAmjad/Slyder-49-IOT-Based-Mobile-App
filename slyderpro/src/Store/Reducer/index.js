import { combineReducers } from 'redux';
import SailingReducer from './SailingReducer';
import WeatherReducer from './WeatherReducer';
import ElectricReducer from './ElectricReducer';
import EngineBBControllerReducer from './UnderEngine/EngineBBControllerReducer';
import UnderEngineCenterReducer from './UnderEngine/UnderEngineCenterReducer';
import UnderEngineLeftReducer from './UnderEngine/UnderEngineLeftReducer';
import UnderEngineRightReducer from './UnderEngine/UnderEngineRightReducer';
import SailingLeftReducer from './Sailing/SailingLeftReducer';
import LowerDeckLeftbtnReducer from './System/LowerDeck/LowerDeckLeftbtnReducer';
import LowerDeckRightbtnReducer from './System/LowerDeck/LowerDeckRightbtnReducer';
import LoweDeckSwitchReducer from './System/LowerDeck/LoweDeckSwitchReducer';
import UppderDeckSwitchReducer from './System/UpperDeck/UppderDeckSwitchReducer';
import SailingCenterReducer from './Sailing/SailingCenterReducer';
import WaterDieselEventsReducer from './Status/WaterDieselEventsReducer';
import GeneratorAndPowerReducer from './Status/GeneratorAndPowerReducer';
import MqttReducer from './MqttReducer';
import WelcomeReducer from './Welcome/WelcomeReducer';
import GoodByeReducer from './Welcome/GoodByeReducer';
import UpperDeckLeftbtnReducer from './System/UpperDeck/UpperDeckLeftbtnReducer';
import UpperDeckRightBtnReducer from './System/UpperDeck/UpperDeckRightBtnReducer';
import SailingRightReducer from './Sailing/SailingRightReducer';
import POSGPS from '../Reducer/POSGPSReducer';
import EventReducer from './Status/EventReducer';
import ElectrictopReducer from './Electric/ElectrictopReducer';
import ElectricBottomReducer from './Electric/ElectricBottomReducer';
import ColorReducer from './ColorReducer';
import HeartbeatReducer from './HeartbeatReducer';
import UnderEngineleftLeftSide from './UnderEngine/UnderEngineleftLeftSide';
import UnderengineRightLeftReducer from './UnderEngine/UnderengineRightLeftReducer';
import ScreenStatusReducer from './ScreenStatusReducer';

const RootReducer = combineReducers({
    Weather: WeatherReducer,
    Sailing: SailingReducer,
    Electric: ElectricReducer,
    EngineController: EngineBBControllerReducer,
    UnderEngineCenter: UnderEngineCenterReducer,
    LeftSideUnderEngine: UnderEngineLeftReducer,
    RightSideUnderEngine: UnderEngineRightReducer,
    SailingLeft: SailingLeftReducer,
    LowerDeckLeftBtn: LowerDeckLeftbtnReducer,
    LowerDeckRightBtn: LowerDeckRightbtnReducer,
    LowerDeckSwitch: LoweDeckSwitchReducer,
    UpperDeckSwitch: UppderDeckSwitchReducer,
    Mqtt: MqttReducer,
    SailingCenter: SailingCenterReducer,
    WaterDieselEvent: WaterDieselEventsReducer,
    GeneratorAndPower: GeneratorAndPowerReducer,
    WelcomePart: WelcomeReducer,
    GoodByeReducer: GoodByeReducer,
    UpperDeckLeftbtn: UpperDeckLeftbtnReducer,
    UpperDeckRightbtn: UpperDeckRightBtnReducer,
    SailingRight: SailingRightReducer,
    GPSDirection: POSGPS,
    EventReducer: EventReducer,
    ElectricTop: ElectrictopReducer,
    ElectricBottom: ElectricBottomReducer,
    ColorReducer: ColorReducer,
    HeartbeatReducer: HeartbeatReducer,
    UnderEngineleftLeftSide: UnderEngineleftLeftSide,
    UnderengineRightLeftReducer:UnderengineRightLeftReducer,
    ScreenStatusReducer:ScreenStatusReducer
});
// export default (state, action) => RootReducer(action.type === 'DISCONNECTED' ? undefined : state, action);
export default (state, action) => RootReducer(state, action);
