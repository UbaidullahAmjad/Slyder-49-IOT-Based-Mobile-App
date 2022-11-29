import React from 'react';
import { Dimensions, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import RoundedButtonStatus from '../RoundedButtonStatus';
import EmptyRoundedButton from '../EmptyRoundedButton';
import { LowerDeckSwitchesStatusChange } from '../../../../../Store/Actions/LowerDeckAction';
import {
    SYSTEM_MAIN_LEFT_WASHING_MACHINE,
    SYSTEM_MAIN_LEFT_GRAY_WATER_PUMP,
    SYSTEM_MAIN_LEFT_BOILER,
    SYSTEM_MAIN_LEFT_TOLIT,
    SYSTEM_MAIN_LEFT_VENTILATION,
    SYSTEM_MAIN_LEFT_WATER_PUMP,
    SYSTEM_MAIN_LEFT_AIR_CON
} from '../../../../../Store/Actions/type'
import { connect } from 'react-redux'
import LocalizationContext from '../../../../../../LocalizationContext'
import store from '../../../../../Store';
import { LowerDeckBASEURLLeftSide } from '../../../../../Constant/CommonStyle';

const washingmachineonPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.washingMachine), `${LowerDeckBASEURLLeftSide};washing_machine`, SYSTEM_MAIN_LEFT_WASHING_MACHINE))
const graywaterpumponPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.grayWaterPump), `${LowerDeckBASEURLLeftSide};grey_water_pump`, SYSTEM_MAIN_LEFT_GRAY_WATER_PUMP))
const toiletonPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.toilet), `${LowerDeckBASEURLLeftSide};toilet`, SYSTEM_MAIN_LEFT_TOLIT))
const ventilationonPress = () => {store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.ventilation), `${LowerDeckBASEURLLeftSide};ventilation`, SYSTEM_MAIN_LEFT_VENTILATION))}
const waterpumponPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.waterpump), `${LowerDeckBASEURLLeftSide};waterpump`, SYSTEM_MAIN_LEFT_WATER_PUMP))
const boileronPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.boiler), `${LowerDeckBASEURLLeftSide};boiler`, SYSTEM_MAIN_LEFT_BOILER))
const aircononPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckLeftBtn.aircon), `${LowerDeckBASEURLLeftSide};air_con`, SYSTEM_MAIN_LEFT_AIR_CON))

function LowerDeckLeft(props) {
    const { t } = React.useContext(LocalizationContext);
  
    return (
        <View
            style={{
                flexDirection: 'column',
                marginTop: Dimensions.get('screen').height / 7,
                width: widthPercentageToDP('14%')
            }}>
            <RoundedButtonStatus
                onClick={washingmachineonPress}
                active={props?.LowerDeckLeftBtn?.washingMachine}
                title={t("washing machine")} top={0} />
            <RoundedButtonStatus
                onClick={graywaterpumponPress}
                active={props?.LowerDeckLeftBtn?.grayWaterPump}
                title={t("grey water pump")}
                top={Dimensions.get('screen').height / 11}
            />
            <RoundedButtonStatus
                onClick={toiletonPress}
                active={props?.LowerDeckLeftBtn?.toilet}
                title={t("toilet")}
                top={Dimensions.get('screen').height / 6}
            />
            <RoundedButtonStatus
                onClick={ventilationonPress}
                active={props?.LowerDeckLeftBtn?.ventilation}
                title={t("ventilation")}
                top={Dimensions.get('screen').height / 4}
            />
            <RoundedButtonStatus
                onClick={waterpumponPress}
                active={props?.LowerDeckLeftBtn?.waterpump}
                title={t("water pump")}
                top={Dimensions.get('screen').height / 3}
            />
            <EmptyRoundedButton top={Dimensions.get('screen').height / 2.35} title='bilge pump center' />
            <RoundedButtonStatus
                onClick={boileronPress}
                active={props?.LowerDeckLeftBtn?.boiler}
                title={t("boiler")}
                top={Dimensions.get('screen').height / 2}
            />
            <RoundedButtonStatus
                onClick={aircononPress}
                active={props?.LowerDeckLeftBtn?.aircon}
                title={t("air con")}
                top={Dimensions.get('screen').height / 1.75}
            />
            <EmptyRoundedButton
                top={Dimensions.get('screen').height / 1.5}
                title={t('bilge pump aft')} />
        </View>
    )
}

const mapStateToProps = ({ LowerDeckLeftBtn }) => ({
    LowerDeckLeftBtn,
});

export default connect(mapStateToProps, {
    LowerDeckSwitchesStatusChange
})(LowerDeckLeft);