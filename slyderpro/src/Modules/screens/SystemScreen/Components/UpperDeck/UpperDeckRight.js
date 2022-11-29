import React from 'react';
import { Dimensions, View } from 'react-native';
import RoundedButtonStatus from '../RoundedButtonStatus';
import { connect } from 'react-redux'
import { UpperDeckSwitchesStatusChange } from '../../../../../Store/Actions/UpperDeckAction';
import {
    UPPERDECK_RIGHT_FURLER,
    UPPERDECK_RIGHT_CAPSTAN,
    UPPERDECK_RIGHT_ANCHOR,
    UPPERDECK_RIGHT_VHF,
    UPPDERDECK_RIGHT_REFRIDGERATOR,
    UPPERDECK_RIGHT_TV,
    UPPERDECK_RIGHT_HIFI,
    UPPERDECK_RIGHT_WINCHES,
    UPPERDECK_RIGHT_HELM,
} from '../../../../../Store/Actions/type'
import LocalizationContext from '../../../../../../LocalizationContext';
import { UpperDeckBASEURLRightSide } from '../../../../../Constant/CommonStyle';
import store from '../../../../../Store';
const { furler, capstan, anchor, vhf, refridgerator, tv, hifi, winches, helm } = store.getState().UpperDeckRightbtn

const furleronPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.furler), `${UpperDeckBASEURLRightSide};furler`, UPPERDECK_RIGHT_FURLER))
const capstanonPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.capstan), `${UpperDeckBASEURLRightSide};capstan_winches`, UPPERDECK_RIGHT_CAPSTAN))
const anchoronPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.anchor), `${UpperDeckBASEURLRightSide};anchor_windlass`, UPPERDECK_RIGHT_ANCHOR))
const vhfonPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.vhf), `${UpperDeckBASEURLRightSide};vhf_ais`, UPPERDECK_RIGHT_VHF))
const refridgeratoronPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.refridgerator), `${UpperDeckBASEURLRightSide};refridgerator`, UPPDERDECK_RIGHT_REFRIDGERATOR))
const tvonPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.tv), `${UpperDeckBASEURLRightSide};tv`, UPPERDECK_RIGHT_TV))
const hifionPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.hifi), `${UpperDeckBASEURLRightSide};hifi`, UPPERDECK_RIGHT_HIFI))
const winchesonPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.winches), `${UpperDeckBASEURLRightSide};winches`, UPPERDECK_RIGHT_WINCHES))
const helmonPress = () => store.dispatch(UpperDeckSwitchesStatusChange(!(store.getState().UpperDeckRightbtn.helm), `${UpperDeckBASEURLRightSide};helm`, UPPERDECK_RIGHT_HELM))

function UpperDeckRight(props) {
    const { t } = React.useContext(LocalizationContext);
    return (
        <View
            style={{
                flexDirection: 'column',
                marginTop: Dimensions.get('screen').height / 18,
                marginLeft: -5
            }}>
            <RoundedButtonStatus
                onClick={furleronPress}
                active={props?.UpperDeckRightbtn?.furler}
                title={t("furler")}
                right
                top={0}
            />
            <View style={{ marginTop: 5 }}>
                <RoundedButtonStatus
                    onClick={capstanonPress}
                    active={props?.UpperDeckRightbtn?.capstan}
                    title={t("capstan winches")}
                    right
                    top={Dimensions.get('screen').height / 13}
                />
            </View>
            <RoundedButtonStatus
                onClick={anchoronPress}
                active={props?.UpperDeckRightbtn?.anchor}
                title={t("anchor windlass")}
                right
                top={Dimensions.get('screen').height / 6}
            />
            <RoundedButtonStatus
                onClick={vhfonPress}
                active={props?.UpperDeckRightbtn?.vhf}
                title="VHF / AIS"
                right
                top={Dimensions.get('screen').height / 4}
            />
            <RoundedButtonStatus
                onClick={refridgeratoronPress}
                active={props?.UpperDeckRightbtn?.refridgerator}
                title={t("refridgerator")}
                right
                top={Dimensions.get('screen').height / 3}
            />

            <RoundedButtonStatus
                onClick={tvonPress}
                active={props?.UpperDeckRightbtn?.tv}
                title={t("TV")}
                right
                top={Dimensions.get('screen').height / 2.4}
            />
            <RoundedButtonStatus
                onClick={hifionPress}
                active={props?.UpperDeckRightbtn?.hifi}
                title={t("HiFi")}
                right
                top={Dimensions.get('screen').height / 2}
            />

            <RoundedButtonStatus
                onClick={winchesonPress}
                active={props?.UpperDeckRightbtn?.winches}
                title={t("winches")}
                right
                top={Dimensions.get('screen').height / 1.5}
            />
            <RoundedButtonStatus
                onClick={helmonPress}
                active={props?.UpperDeckRightbtn?.helm}
                title={t("helm stations")}
                right
                top={Dimensions.get('screen').height / 1.32}
            />
        </View>
    )
}

const mapStateToProps = ({ UpperDeckRightbtn }) => ({
    UpperDeckRightbtn,

});

export default connect(mapStateToProps, {
    UpperDeckSwitchesStatusChange
})(UpperDeckRight);