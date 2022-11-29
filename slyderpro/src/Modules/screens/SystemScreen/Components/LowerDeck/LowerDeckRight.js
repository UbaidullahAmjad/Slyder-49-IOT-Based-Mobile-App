import React from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../../LocalizationContext';
import store from '../../../../../Store';
import { LowerDeckSwitchesStatusChange } from '../../../../../Store/Actions/LowerDeckAction';
import {
    LOWERDECK_RIGHT_AIRCON, LOWERDECK_RIGHT_FREEZER, LOWERDECK_RIGHT_GRAY_WATER_PUMP, LOWERDECK_RIGHT_ICE_CUBE_MAKER, LOWERDECK_RIGHT_TOLIT, LOWERDECK_RIGHT_VENTILATION, LOWERDECK_RIGHT_WATERMAKER
} from '../../../../../Store/Actions/type';
import EmptyRoundedButton from '../EmptyRoundedButton';
import RoundedButtonStatus from '../RoundedButtonStatus';
import { LowerDeckBASEURLRightSide } from '../../../../../Constant/CommonStyle';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const { freezer, ventilation, grayWaterPump, toilet, aircon, watermaker, ice_cube_maker } = store.getState().LowerDeckRightBtn

const freezeronPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.freezer), `${LowerDeckBASEURLRightSide};freezer`, LOWERDECK_RIGHT_FREEZER))
const ventilationonPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.ventilation), `${LowerDeckBASEURLRightSide};ventilation`, LOWERDECK_RIGHT_VENTILATION))
const grayWaterPumponPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.grayWaterPump), `${LowerDeckBASEURLRightSide};grey_water_pump`, LOWERDECK_RIGHT_GRAY_WATER_PUMP))
const toiletonPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.toilet), `${LowerDeckBASEURLRightSide};toilet`, LOWERDECK_RIGHT_TOLIT))
const aircononPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.aircon), `${LowerDeckBASEURLRightSide};air_con`, LOWERDECK_RIGHT_AIRCON))
const watermakeronPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.watermaker), `${LowerDeckBASEURLRightSide};watermaker`, LOWERDECK_RIGHT_WATERMAKER))
const IcecubeonPress = () => store.dispatch(LowerDeckSwitchesStatusChange(!(store.getState().LowerDeckRightBtn.ice_cube_maker), `${LowerDeckBASEURLRightSide};ice_cube_maker`, LOWERDECK_RIGHT_ICE_CUBE_MAKER))

function LowerDeckRight(props) {
    const { t } = React.useContext(LocalizationContext);

    return (
        <View
            style={{
                flexDirection: 'column',
                marginTop: Dimensions.get('screen').height / 18
            }}>
            <RoundedButtonStatus
                onClick={IcecubeonPress}
                active={props?.LowerDeckRightBtn?.ice_cube_maker}
                title={t("ice cube maker")}
                right
                top={0}
            />
            <RoundedButtonStatus
                onClick={freezeronPress}
                active={props?.LowerDeckRightBtn?.freezer}
                title={t("freezer")}
                right
                top={Dimensions.get('screen').height / 12}
            />
            <RoundedButtonStatus
                onClick={ventilationonPress}
                active={props?.LowerDeckRightBtn?.ventilation}
                title={t("ventilation")}
                right
                top={Dimensions.get('screen').height / 6}
            />
            <EmptyRoundedButton title='sea water pump air-con' top={Dimensions.get('screen').height / 3.8} right />
            <RoundedButtonStatus
                onClick={grayWaterPumponPress}
                active={props?.LowerDeckRightBtn?.grayWaterPump}
                title={t("grey water pump")}
                right
                top={Dimensions.get('screen').height / 3}
            />
            <RoundedButtonStatus
                onClick={toiletonPress}
                active={props?.LowerDeckRightBtn?.toilet}
                title={t("toilet")}
                right
                top={Dimensions.get('screen').height / 2.4}
            />
            <EmptyRoundedButton title={t('bilge pump center')} top={Dimensions.get('screen').height / 1.95}
                right />
            <RoundedButtonStatus
                onClick={aircononPress}
                active={props?.LowerDeckRightBtn?.aircon}
                title={t("air con")}
                right
                top={Dimensions.get('screen').height / 1.7}
            />
            <EmptyRoundedButton title={t('bilge pump aft')} top={Dimensions.get('screen').height / 1.49}
                right />
            <View style={{
                flexDirection: 'row', top: Dimensions.get('screen').height / 1.33, position: "absolute"
            }}>
                <RoundedButtonStatus
                    onClick={watermakeronPress}
                    active={props?.LowerDeckRightBtn?.watermaker}
                    title={t("water maker")}
                    right
                />
                <View style={{ position: "absolute", right:-heightPercentageToDP('20%') }}>
                    <RoundedButtonStatus
                        active={false}
                        title={"rc"}
                    />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ LowerDeckRightBtn, ColorReducer }) => ({
    LowerDeckRightBtn,
    ColorReducer
});

export default connect(mapStateToProps, {
    LowerDeckSwitchesStatusChange
})(LowerDeckRight);