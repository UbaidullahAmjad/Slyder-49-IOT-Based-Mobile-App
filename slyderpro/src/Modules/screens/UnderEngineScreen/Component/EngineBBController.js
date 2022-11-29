import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import NumberMeter from '../../../../Component/NumberMeter'
import greenCircle from '../../../../../images/greencircle.png';
import { connect } from 'react-redux';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import LocalizationContext from '../../../../../LocalizationContext';

function EngineBBController(props) {
    const { t } = React.useContext(LocalizationContext)

    return (
        <>
            <View style={{ position: "absolute", bottom: Dimensions.get('screen').height / 4, left: Dimensions.get('screen').width / 9 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        width: "80%", paddingLeft: 8
                    }}>
                    <Text
                        style={{
                            bottom: 20,
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                        }}>
                        {t('controller')}
                    </Text>
                    <Text
                        style={{
                            // left: Dimensions.get('screen').width / 5,
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                            bottom: 20,
                        }}>
                        {t('engine bb')}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <View style={{ flexDirection: 'column', }}>
                        <NumberMeter number={`${props?.EngineController?.LeftControllerEngine?.controllerTemp}`} skill="°C" width={5} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 18 }}>
                        <NumberMeter number={`${props?.EngineController?.LeftControllerEngine?.engineTemp}`} skill="°C" width={5} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                        <NumberMeter number={'TBD'} skill="kW" width={5} />
                    </View>
                </View>
                <View style={{  flexDirection: "row-reverse", right: -25 }}>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <View style={{ flexDirection: 'row', right: Dimensions.get('screen').width / 60 }}>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                marginRight: 10
                            }}>
                                {t('sea water pump')}
                            </Text>
                            <Image
                                style={{ width: 20, height: 20, alignSelf: 'center',tintColor:props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#00FF00' }}
                                source={greenCircle}></Image>
                        </View>
                        <Text style={{
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                            marginRight: 10
                        }}>
                            {t('cooling pump')}
                        </Text>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center',tintColor:props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#00FF00' }}
                            source={greenCircle}></Image>
                    </View>

                </View>
            </View>
            <View style={{ position: "absolute", bottom: Dimensions.get('screen').height / 4, right: Dimensions.get('screen').width / 9 }}>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: "space-between",
                            width: "80%", paddingLeft: 8
                        }}>
                        <Text
                            style={{
                                // left: Dimensions.get('screen').width / 9,
                                bottom: 20,
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t('engine stb')}
                        </Text>
                        <Text
                            style={{
                                right: Dimensions.get('screen').width / 50,
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                bottom: 20,

                            }}>
                            {t('controller')}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <View style={{ flexDirection: 'column', }}>
                        <NumberMeter number={'TBD'} skill="kW" width={5} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 18 }}>
                        <NumberMeter number={`${props?.EngineController?.rightControllerEngine?.engineTemp}`} skill="°C" width={5} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                        <NumberMeter number={`${props?.EngineController?.rightControllerEngine?.controllerTemp}`} skill="°C" width={5} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", left: -25 }}>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <View style={{ flexDirection: 'row', right: Dimensions.get('screen').width / 60 }}>
                            <Image
                                style={{ width: 20, height: 20, alignSelf: 'center',tintColor:props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#00FF00' }}
                                source={greenCircle}></Image>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                marginLeft: 10
                            }}>
                                {t('cooling pump')}
                            </Text>
                        </View>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center', tintColor:props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#00FF00'}}
                            source={greenCircle}></Image>
                        <Text style={{
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                            marginLeft: 10
                        }}>
                            {t('sea water pump')}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const mapStateToProps = ({ EngineController , ColorReducer }) => ({
    EngineController , ColorReducer
});

export default connect(mapStateToProps, {

})(EngineBBController);