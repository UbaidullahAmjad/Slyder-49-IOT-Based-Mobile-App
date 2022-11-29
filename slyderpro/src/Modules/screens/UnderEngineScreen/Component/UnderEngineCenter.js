import { Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { connect } from 'react-redux'
import boat from '../../../../../images/compoenentimages/sailing.png'
import leftrev from '../../../../../images/leftrevs.png'
import leftrevRed from '../../../../../images/leftrevsRed.png'
import Number from '../../../../../images/onlyNumber.png'
import rightrev from '../../../../../images/rightrevs.png'
import rightrevRed from '../../../../../images/rightrevsRed.png'
import UnderEngineFastImage from './UnderEngineFastImages'
import { ReplaceDotandFixed, returnImage } from '../../../../Confiq/Helper'
import POSGPS from '../../../../Component/POSGPS'
import LocalizationContext from '../../../../../LocalizationContext'
import RudderImageUnderEngine from './RudderImageUnderEngine'

function UnderEngineCenter(props) {
    const { t } = React.useContext(LocalizationContext);
    return (
        <View style={{ flex: 1, paddingTop: hp('3%'), alignItems: 'center', marginBottom: hp('4%') }}>
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                    <POSGPS />
                    <View
                        style={{
                            width: "69%",
                            borderWidth: 0.7,
                            borderColor: props?.ColorReducer?.iconNormalColor,
                            borderRadius: 20,
                            paddingTop: wp('0.8%'),
                            paddingBottom: 7,
                            marginTop: 14,
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            paddingHorizontal: wp('0.8%')
                        }}>

                        <View style={{ width: '50%', }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text
                                    style={{

                                        fontSize: hp('2%'),
                                        color: props?.ColorReducer?.primary,
                                        fontFamily: "OpenSans-Bold",
                                    }}>
                                    {t('SPEED')}
                                </Text>
                                <Text
                                    style={{

                                        fontSize: hp('2%'),
                                        color: props?.ColorReducer?.primary,
                                        fontFamily: "OpenSans-Bold",
                                    }}>
                                    kn
                                </Text>

                            </View>
                            <Text
                                style={{
                                    fontSize: hp('8%'),
                                    alignSelf: 'center',
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "DINAlternate-Bold",
                                    marginTop: -20,
                                    textAlign: "center"
                                }}>
                                {ReplaceDotandFixed(props?.UnderEngineCenter?.speed)}
                            </Text>
                        </View>
                        <View
                            style={{
                                height: '90%',
                                width: 2,
                                backgroundColor: props?.ColorReducer?.iconNormalColor,
                                alignSelf: 'center'

                            }}></View>
                        <View style={{ width: '45%', }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text
                                    style={{
                                        fontSize: hp('2%'),
                                        color: props?.ColorReducer?.primary,
                                        fontFamily: "OpenSans-Bold",
                                    }}>
                                    SOG
                                </Text>
                                <Text
                                    style={{
                                        fontSize: hp('2%'),
                                        color: props?.ColorReducer?.primary,
                                        fontFamily: "OpenSans-Bold",
                                    }}>
                                    kn
                                </Text>

                            </View>
                            <Text
                                numberOfLines={1}
                                style={{
                                    fontSize: hp('8%'),
                                    alignSelf: 'center',
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "DINAlternate-Bold",
                                    marginTop: -20,
                                    textAlign: "center"
                                }}>
                                {`${ReplaceDotandFixed(props?.UnderEngineCenter?.sog)}`}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ alignItems: "center", marginTop: hp('2%') }}>

                            <UnderEngineFastImage
                                imageIndex={1}
                                imageTransform={-45}
                                imageTop={hp('1')}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('window').height / 2.5}
                                imageWidth={Dimensions.get('window').width}
                                imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/yellowRED.png') : require('../../../../../images/wp.png')}
                            />

                            <UnderEngineFastImage
                                imageIndex={1}
                                imageTransform={40}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('window').height / 2.5}
                                imageWidth={Dimensions.get('window').width}
                                imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/ORANGEred.png') : require('../../../../../images/orangetag.png')}
                            />

                            <UnderEngineFastImage
                                tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.20)' : null}
                                imageHeight={Dimensions.get('screen').height / 2.3}
                                imageWidth={Dimensions.get('screen').width / 4.2}
                                imageSource={require('../../../../../images/compoenentimages/white.png')}
                            />

                            <UnderEngineFastImage
                                tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.40)' : null}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('screen').height / 2.3}
                                imageWidth={Dimensions.get('screen').width / 4.2}
                                imageSource={require('../../../../../images/compoenentimages/greycircle.png')}
                            />

                            <UnderEngineFastImage
                                tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.70)' : null}
                                imageTop={hp('1')}
                                imageLeft={wp('2.15')}
                                imageTransform={-props?.UnderEngineCenter?.Heading}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('screen').height / 2.41}
                                imageWidth={Dimensions.get('screen').width / 4.35}
                                imageSource={Number}
                            />

                            <UnderEngineFastImage
                                tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.40)' : null}
                                imageTop={Dimensions.get('window').height / 100}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('window').height / 2.2}
                                imageWidth={Dimensions.get('window').width / 1.99}
                                imageSource={boat}
                            />

                            <View
                                style={{
                                    backgroundColor: props?.ColorReducer?.isDarkThemeOn ? '#232526' : 'white',
                                    height: Dimensions.get('screen').height / 17,
                                    position: 'absolute',
                                    alignSelf: 'center',
                                    borderColor: props?.ColorReducer?.isDarkThemeOn ? '#951212' : '#434748',
                                    borderWidth: wp('0.3%'),
                                    borderRadius: wp('1%'),
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: Dimensions.get('window').height / 10,
                                    top: hp('1%'),
                                }}>
                                <Text style={{ fontFamily: "OpenSans-Bold", fontSize: hp('3%'), color: props?.ColorReducer?.isDarkThemeOn ? "#951212" : '#9E9EA6', alignSelf: 'center' }}>{ReplaceDotandFixed(props?.UnderEngineCenter?.Heading)}</Text>
                            </View>

                            <UnderEngineFastImage
                                imageTop={Dimensions.get('window').height / 120}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('window').height / 2.2}
                                imageWidth={Dimensions.get('window').width / 1.99}
                                imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/compoenentimages/rightRed.png') : require('../../../../../images/compoenentimages/right.png')}
                                imageLeft={-Dimensions.get('window').width / 9.5}
                            />

                            {/* <UnderEngineFastImage
                                imageTop={hp('5%')}
                                imagePosition={"absolute"}
                                imageHeight={Dimensions.get('window').height / 2.5}
                                imageWidth={wp('20%')}
                                imageSource={returnImage(props?.UnderEngineCenter?.RudderPosition)}
                            /> */}

                            <RudderImageUnderEngine props={props} />

                            <Text style={{ color: props?.ColorReducer?.isDarkThemeOn ? '#951212' : 'white', position: 'absolute', fontFamily: "OpenSans-Bold", fontSize: hp('2'), alignSelf: 'center', top: Dimensions.get('screen').height / 4.9, left: wp('12.8%') }}>{`2.7`}</Text>
                            <Text style={{
                                color: props?.ColorReducer?.isDarkThemeOn ? '#FF2137' : '#AD4293', position: 'absolute', fontFamily: "OpenSans-Bold", fontSize: hp('2'), top: Dimensions.get('screen').height / 3.25, alignSelf: 'center',
                                // left: wp('12.9%')
                            }}>{`${ReplaceDotandFixed(props?.UnderEngineCenter?.RudderPosition)}°`}</Text>
                        </View>

                        <View style={{
                            position: 'absolute',
                            top: '40%',
                            left: '-4.6%',
                        }}>
                            <Image
                                style={{
                                    height: Dimensions.get('screen').height / 9.5,
                                    width: Dimensions.get('screen').width / 11,
                                }}
                                source={props?.ColorReducer?.isDarkThemeOn ? leftrevRed : leftrev} />

                            <View style={{
                                position: 'absolute',
                                height: Dimensions.get('screen').height / 9.5,
                                width: Dimensions.get('screen').width / 11,
                                justifyContent: "center",
                                alignItems: 'center',
                                top: "8%",
                                left: '3%'
                            }}>
                                <Text
                                    style={{
                                        color: props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#EBDCDC',
                                        fontFamily: "DINAlternate-Bold",
                                        fontSize: hp('6%'),
                                    }}>
                                    {ReplaceDotandFixed(props?.UnderEngineCenter?.leftRpm).toString().substring(0, 3)}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top: '40%',
                            right: '-5%',
                        }}>
                            <Image
                                style={{
                                    height: Dimensions.get('screen').height / 9.5,
                                    width: Dimensions.get('screen').width / 11,
                                }}
                                source={props?.ColorReducer?.isDarkThemeOn ? rightrevRed : rightrev} />
                            <View style={{
                                position: 'absolute',
                                height: Dimensions.get('screen').height / 9.5,
                                width: Dimensions.get('screen').width / 11,
                                justifyContent: "center",
                                alignItems: 'center',
                                top: "8%",
                                right: '3%'
                            }}>
                                <Text
                                    style={{
                                        color: props?.ColorReducer?.isDarkThemeOn ? '#B3001C' : '#EBDCDC',
                                        fontFamily: "DINAlternate-Bold",
                                        fontSize: hp('6%'),
                                    }}>
                                    {ReplaceDotandFixed(props?.UnderEngineCenter?.rightRpm).toString().substring(0, 3)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        width: "69%",
                        borderWidth: 0.7,
                        borderColor: props?.ColorReducer?.iconNormalColor,
                        borderRadius: 20,
                        paddingTop: 10,
                        paddingBottom: 7,
                        marginTop: 14,
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        paddingHorizontal: 12
                    }}>

                    <View style={{ width: '45%', }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text
                                style={{

                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                }}>
                                {t('RANGE')}
                            </Text>
                            <Text
                                style={{

                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                }}>
                                nm
                            </Text>

                        </View>
                        <Text
                            style={{
                                fontSize: hp('8%'),
                                alignSelf: 'center',
                                color: props?.ColorReducer?.primary,
                                fontFamily: "DINAlternate-Bold",
                                marginTop: -18,
                                textAlign: "center"
                            }}>
                            {props?.UnderEngineCenter?.range}
                        </Text>
                    </View>
                    <View
                        style={{
                            height: '90%',
                            width: 2,
                            backgroundColor: props?.ColorReducer?.iconNormalColor,
                            alignSelf: 'center'

                        }}></View>
                    <View style={{ width: '45%', }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text
                                style={{

                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                }}>
                                {t('RANGE')}
                            </Text>
                            <Text
                                style={{

                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                }}>
                                hrs:min
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: hp('8%'),
                                alignSelf: 'center',
                                color: props?.ColorReducer?.primary,
                                fontFamily: "DINAlternate-Bold",
                                marginTop: -18,
                                textAlign: "center"
                            }}>
                            {props?.UnderEngineCenter?.rangeHrs}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ UnderEngineCenter, ColorReducer }) => ({
    UnderEngineCenter,
    ColorReducer
});

export default connect(mapStateToProps, {
})(UnderEngineCenter);