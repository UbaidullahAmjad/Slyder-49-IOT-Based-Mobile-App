import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import CustomeSwitch from '../../../../Component/CustomeSwitch';
import GeneratorButton from '../../../../Component/Generator/GeneratorButton';
import NumberMeter from '../../../../Component/NumberMeter';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import { plusMinus, startGeneratorStyle } from '../../../../Constant/CommonStyle';
import store from '../../../../Store';
import { GeneratorSwitch, IncreaseKw, StartGenerator, StopGenerator } from '../../../../Store/Actions/StatusAction';
import LocalizationContext from './../../../../../LocalizationContext';
import LongNeomorphButton from './LongNeomorphButton';
import Port from './Port';
const generatorSwitch = (val) => store.dispatch(GeneratorSwitch(val))
const MinusOnpress = () => store.dispatch(IncreaseKw(`slyderapp;status;generator;generator_minus;True`))
const PlusOnpress = () => store.dispatch(IncreaseKw(`slyderapp;status;generator;generator_plus;True`))
const PlusOnpressout = () => store.dispatch(IncreaseKw(`slyderapp;status;generator;generator_plus;False`))
const MinusOnpressout = () => store.dispatch(IncreaseKw(`slyderapp;status;generator;generator_minus;False`))

function GeneratorAndPower(props) {
    const { t } = React.useContext(LocalizationContext);
    const [bgColor1, setBgColor1] = useState('#1F1F1F');
    const [bgColor2, setBgColor2] = useState('#1F1F1F');
    const setBoth1 = (val) => {
        if (val) {
            setBgColor1('red');
            props?.StartGenerator('True')
        } else {
            setBgColor1('#1F1F1F');
            props?.StartGenerator('False')
        }
    };

    const setBoth2 = (val) => {
        if (val) {
            setBgColor2('red');
            props?.StopGenerator('True')
        } else {
            setBgColor2('#1F1F1F');
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
    console.log("Generator and power")

    return (
        <View style={{ width: wp('40%'), height: "100%", marginBottom: hp('3%'), flexDirection: "row", }}>
            <View
                style={{
                    width: '60%',
                    alignItems: 'center',
                    borderLeftWidth: 2,
                    borderColor: '#4A4D4E',
                    marginBottom: 24,
                    height: "90%",
                    alignSelf: "center",
                    justifyContent: "center",
                }}>
                <View style={{ alignItems: "center", width: '100%' }}>
                    <Text
                        style={{
                            fontSize: hp('2.5%'),
                            fontFamily: "OpenSans-Bold",
                            color: props?.ColorReducer?.secondaryLight,
                            marginBottom: 6,
                            textAlign: 'center',
                            textShadowColor: 'rgba(255,255,255,.28)',
                            textShadowOffset: { width: -0.1, height: 1.1 },
                            textShadowRadius: 1,
                        }}>
                        {t('GENERATOR')}
                    </Text>
                    <View style={{ alignSelf: 'center', marginTop: 16 }}>
                        <CustomeSwitch
                            value={props?.GeneratorAndPower?.GeneratorSwitch}
                            onPress={generatorSwitch}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '85%',
                            marginTop: '4%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <GeneratorButton
                            title={t("start")}
                            stylee={startGeneratorStyle}
                            onPressIn={GenPressIn}
                            onPressOut={GenPressOut}
                            borderColor={bgColor1}
                        />
                        <View style={{ justifyContent: 'center', }}>
                            <NumberMeter number={props?.GeneratorAndPower?.starterBattery} skill="V" width={wp('1.8%')} />
                        </View>
                        <GeneratorButton
                            title={t('stop')}
                            stylee={startGeneratorStyle}
                            onPressIn={GenstopPressIn}
                            onPressOut={GenstopPressOut}
                            borderColor={bgColor2}
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                            textAlign: 'center',
                            marginBottom: hp('5%'),
                        }}>
                        {t('starter battery')}
                    </Text>
                    <NumberMeter number={`${ReplaceDotandFixed(props?.GeneratorAndPower?.rpm)}`} skill="rpm" width={0} />
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '70%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginVertical: '6%',
                        }}>
                        <GeneratorButton
                            title={"-"}
                            stylee={plusMinus}
                            onPressIn={MinusOnpress}
                            onPressOut={MinusOnpressout}
                            borderColor={'#1F1F1F'}
                        />
                        <View style={{ justifyContent: 'center' }}>
                            <NumberMeter number={props?.GeneratorAndPower?.Kw} skill="kW" width={wp('1.8%')} />
                        </View>
                        <GeneratorButton
                            title={"+"}
                            stylee={plusMinus}
                            onPressIn={PlusOnpress}
                            onPressOut={PlusOnpressout}
                            borderColor={'#1F1F1F'}
                        />
                    </View>
                    <View>
                        <LongNeomorphButton number={props?.GeneratorAndPower?.hrs} skill="hrs" />
                    </View>
                </View>
            </View>
            <View
                style={{
                    width: '40%',
                    alignItems: 'center',
                    borderLeftWidth: 2,
                    borderColor: '#4A4D4E',
                    marginBottom: 24,
                    height: "90%",
                    alignSelf: "center",
                    justifyContent: "center",
                }}>
                <Text
                    style={{
                        fontSize: hp('2.5%'),
                        fontFamily: "OpenSans-Bold",
                        color: props?.ColorReducer?.secondaryLight,
                        marginBottom: 24,
                        textAlign: 'center',
                        textShadowColor: 'rgba(255,255,255,.28)',
                        textShadowOffset: { width: -0.1, height: 1.1 },
                        textShadowRadius: 1,
                    }}>
                    {t('POWER')}
                </Text>
                <NumberMeter number={props?.GeneratorAndPower?.battery24V} skill="%" width={wp('1.8%')} />
                <Text
                    style={{
                        fontFamily: "OpenSans-Bold",
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        textAlign: 'center',
                        marginTop: hp('1%'),
                        marginBottom: hp('3%')

                    }}>
                    24 V {t('batteries')}
                </Text>
                <NumberMeter number={props?.GeneratorAndPower?.hvBattery} skill="%" width={wp('1.8%')} />
                <Text
                    style={{
                        fontFamily: "OpenSans-Bold",
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        marginBottom: 6,
                        textAlign: 'center',
                    }}>
                    {t('HV batteries')}
                </Text>
                <Text
                    style={{
                        fontSize: hp('2%'),
                        fontFamily: "OpenSans-Bold",
                        color: props?.ColorReducer?.secondaryLight,
                        textAlign: 'center',
                        textShadowColor: 'rgba(255,255,255,.28)',
                        textShadowOffset: { width: -0.1, height: 1.1 },
                        textShadowRadius: 1,
                        marginTop: hp('5%')
                    }}>
                    {t('SHORE POWER')}
                </Text>
                <Port text={t('port 1')} active />
                <View style={{ marginTop: 0 }}>
                    <Port text={t('port 2')} />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ GeneratorAndPower, ColorReducer }) => ({
    GeneratorAndPower,
    ColorReducer
});

export default React.memo(connect(mapStateToProps, {
    GeneratorSwitch,
    StartGenerator,
    StopGenerator,
    IncreaseKw
})(GeneratorAndPower))