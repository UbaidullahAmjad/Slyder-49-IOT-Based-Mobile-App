import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../LocalizationContext';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import GeneratorButton from '../../../../Component/Generator/GeneratorButton';
import store from '../../../../Store';
import { CHANGE_UNDERENGINE_LEFT_GENERATOR, CHANGE_UNDERENGINE_LEFT_NAV_QUIPMENT, CHANGE_UNDERENGINE_LEFT_PROPULSION } from '../../../../Store/Actions/type';
import { StartGenerator, StopGenerator, UnderEngineSwitchesStatusChange } from '../../../../Store/Actions/UnderEngineActions';
import UnderEngineLeftLeftSide from './UnderEngineLeftLeftSide';

function UnderEngineLeft(props) {
    const { t } = React.useContext(LocalizationContext);
    console.log("under engine left")

    const [bgColor1, setBgColor1] = useState('#3e3e3e');
    const [bgColor2, setBgColor2] = useState('#3e3e3e');
    const startGeneratorStyle = React.useMemo(() => {
        return {
            width: Dimensions.get('screen').width / 20,
            height: Dimensions.get('screen').width / 24,
            borderRadius: 40,
            borderWidth: 6,
        }
    }, [])


    const setBoth1 = (val) => {
        if (val) {
            setBgColor1('red');
            props?.StartGenerator('True')
        } else {
            setBgColor1('#3e3e3e');
            props?.StartGenerator('False')
        }
    };

    const setBoth2 = (val) => {
        if (val) {
            setBgColor2('red');
            props?.StopGenerator('True')
        } else {
            setBgColor2('#3e3e3e');
            props?.StopGenerator('False')
        }
    };

    const GenPressIn = React.useMemo(() => {
        return () => setBoth1(true)
    }, [])
    const GenPressOut = React.useMemo(() => {
        return () => setBoth1(false)
    }, [])
    const GenstopPressIn = React.useMemo(() => {
        return () => setBoth2(true)
    }, [])
    const GenstopPressOut = React.useMemo(() => {
        return () => setBoth2(false)
    }, [])

    return (
        <View style={{ flex: 1, paddingTop: hp('5%'), paddingLeft: wp('1.5%'), flexDirection: "row", marginBottom: hp('3%') }}>
            <View style={{ width: "40%", justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginTop: hp('4.5%') }}>
                    <CustomSwitch
                        value={props?.LeftSideUnderEngine?.nav_quipment}
                        onPress={naveq}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            top: 5,
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                        }}>
                        {t("nav equipment")}
                    </Text>
                    <View style={{ marginTop: hp('4.5%') }}>
                        <CustomSwitch
                            value={props?.LeftSideUnderEngine?.propulsion}
                            onPress={propulsion}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                top: 5,
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t('propulsion')}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "column-reverse", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp('1.3%') }}>
                        <GeneratorButton
                            title={t("start")}
                            stylee={startGeneratorStyle}
                            onPressIn={GenPressIn}
                            onPressOut={GenPressOut}
                            borderColor={bgColor1}
                        />
                        <GeneratorButton
                            title={t('stop')}
                            stylee={startGeneratorStyle}
                            onPressIn={GenstopPressIn}
                            onPressOut={GenstopPressOut}
                            borderColor={bgColor2}
                            marginLeft={true}
                        />
                    </View>
                    <View>
                        <CustomSwitch
                            value={props?.LeftSideUnderEngine?.generator}
                            onPress={generatorswitch}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t("generator")}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ width:"60%" }}>
                <UnderEngineLeftLeftSide />
            </View>
        </View>
    )
}

const mapStateToProps = ({ LeftSideUnderEngine, ColorReducer }) => ({
    LeftSideUnderEngine,
    ColorReducer
});

export default connect(mapStateToProps, {
    UnderEngineSwitchesStatusChange,
    StartGenerator,
    StopGenerator
})(UnderEngineLeft);


// Switches onPress function 

const naveq = (val) => store.dispatch(UnderEngineSwitchesStatusChange(val, 'slyderapp;UnderEngine;nav_eq;nav_eq', CHANGE_UNDERENGINE_LEFT_NAV_QUIPMENT))
const propulsion = (val) => store.dispatch(UnderEngineSwitchesStatusChange(val, 'slyderapp;UnderEngine;propulsion;propulsion', CHANGE_UNDERENGINE_LEFT_PROPULSION))
const generatorswitch = (val) => store.dispatch(UnderEngineSwitchesStatusChange(val, 'slyderapp;UnderEngine;generator;generator_switch', CHANGE_UNDERENGINE_LEFT_GENERATOR))

