import React from 'react';
import { View } from 'react-native';
import {
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import ScaleComparing from '../../../../Component/ScaleComparing';
import { connect } from 'react-redux'
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import LocalizationContext from '../../../../../LocalizationContext';

function WaterandDieselScale(props) {
    const { t } = React.useContext(LocalizationContext);
    return (
        <View style={{ width: wp('60%'), height: "100%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingLeft: wp('5.5%') }}>
            <ScaleComparing
                title={t("fresh water")}
                fill={ReplaceDotandFixed(props?.WaterDieselEvent?.freshwaterstb)}
                scale="sb"
                skillColor={getColor(props?.WaterDieselEvent?.freshwaterstb, props?.WaterDieselEvent?.freshwaterColorScale, props?.ColorReducer)}
                titleColor={props?.ColorReducer?.primary}
                numberColor={props?.ColorReducer?.light}
                tubeColor={props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#D66816'}
            />
            <View style={{}}>
                <ScaleComparing
                    title={t("fresh water")}
                    fill={ReplaceDotandFixed(props?.WaterDieselEvent?.freshWaterbb)}
                    scale="bb"
                    skillColor={getColor(props?.WaterDieselEvent?.freshWaterbb, props?.WaterDieselEvent?.freshwaterColorScale, props?.ColorReducer)}
                    titleColor={props?.ColorReducer?.primary}
                    numberColor={props?.ColorReducer?.light}
                    tubeColor={props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#D66816'}
                />
            </View>
            <View style={{ marginLeft: wp('2%') }}>
                <ScaleComparing
                    title={t("black water")}
                    fill={ReplaceDotandFixed(props?.WaterDieselEvent?.blackwaterstb)}
                    scale="sb"
                    skillColor={getColor(props?.WaterDieselEvent?.blackwaterstb, props?.WaterDieselEvent?.blackwaterColorScale, props?.ColorReducer)}
                    titleColor={props?.ColorReducer?.primary}
                    numberColor={props?.ColorReducer?.light}
                    tubeColor={props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#D66816'}
                />
            </View>

            <View style={{}}>
                <ScaleComparing
                    title={t("black water")}
                    fill={ReplaceDotandFixed(props?.WaterDieselEvent?.blackwaterbb)}
                    scale="bb"
                    skillColor={getColor(props?.WaterDieselEvent?.blackwaterbb, props?.WaterDieselEvent?.blackwaterColorScale, props?.ColorReducer)}
                    titleColor={props?.ColorReducer?.primary}
                    numberColor={props?.ColorReducer?.light}
                    tubeColor={props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#D66816'}
                />
            </View>
            <View style={{ marginLeft: wp('2%') }}>
                <ScaleComparing
                    title="diesel"
                    fill={ReplaceDotandFixed(props?.WaterDieselEvent?.diesel)}
                    skillColor={getColor(props?.WaterDieselEvent?.diesel, props?.WaterDieselEvent?.DiesilColorScale, props?.ColorReducer)}
                    titleColor={props?.ColorReducer?.primary}
                    numberColor={props?.ColorReducer?.light}
                    tubeColor={props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#D66816'}
                />
            </View>
        </View>
    )
}

const mapStateToProps = ({ WaterDieselEvent, ColorReducer }) => ({
    WaterDieselEvent,
    ColorReducer
});

export default connect(mapStateToProps, {
})(WaterandDieselScale);

function getColor(val, scale, dark) {
        if (scale.low < scale.reserve) {
            if (val <= scale.reserve && val >= scale.low) {
                return '#F8E81E'
            } else if (val > scale.reserve) {
                return 'red'
            } else {
                return '#92FD31'
            }

        } else {
            if (val >= scale.reserve && val <= scale.low) {
                return '#F8E81E'
            } else if (val < scale.reserve) {
                return 'red'
            } else {
                return '#92FD31'
            }
        }
}