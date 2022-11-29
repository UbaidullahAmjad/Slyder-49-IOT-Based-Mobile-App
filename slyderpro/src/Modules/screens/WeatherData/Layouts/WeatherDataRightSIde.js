import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { connect } from 'react-redux'
import LocalizationContext from '../../../../../LocalizationContext'
import GeneratorButton from '../../../../Component/Generator/GeneratorButton'
import store from '../../../../Store'
import { Increaseh } from '../../../../Store/Actions/WeatherAction'
import RotateImage from '../Component/rotateImage'
import WeatherTimeHour from '../Component/WeatherTimeHour'
import WendSpeed from '../Component/WendSpeed'
const plusMinus = {
    width: Dimensions.get('screen').width / 28,
    height: Dimensions.get('screen').width / 28,
    borderRadius: 100,
    borderColor: '#1F1F1F',
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center"
}
const plus = () => store.dispatch(Increaseh(`slyderapp;weather_data;timescale;timescale_plus;True`))
const minus = () => store.dispatch(Increaseh(`slyderapp;weather_data;timescale;timescale_minus;True`))

function WeatherDataRightSIde(props) {
    const { t } = React.useContext(LocalizationContext);

    return (
        <View style={[styles.container, {}]}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '15%' }}>
                    <GeneratorButton
                        title={"-"}
                        stylee={plusMinus}
                        onPressIn={minus}
                        borderColor={'#1F1F1F'}
                    />
                    <View
                        style={{
                            alignItems: 'center',
                            marginHorizontal: 20,
                            marginTop: hp('4%'),
                            justifyContent: 'center',
                        }}>
                        <WeatherTimeHour />
                        <Text
                            style={{
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                fontSize: hp('2.2%'),
                                marginTop: 10,
                            }}>
                            {t('timescale')}
                        </Text>
                    </View>
                    <GeneratorButton
                        title={"+"}
                        stylee={plusMinus}
                        onPressIn={plus}
                        borderColor={'#1F1F1F'}
                    />
                </View>
            </View>

            <View style={{
                marginTop: hp('5%'),
                marginBottom: hp('5%'),
            }}>
                <RotateImage>
                    <View style={{
                        width: '38%',
                        height: '40%',
                        position: 'absolute',
                        top: Dimensions.get('screen').height / 28,
                        borderRadius: 200,
                        paddingVertical: 5,
                        alignSelf: 'center',
                        marginHorizontal: 10,
                    }}>
                        <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ height: '85%', opacity: 0.5, width: 1, backgroundColor: props?.ColorReducer?.isDarkThemeOn ? "red" : 'silver' }} />
                        </View>

                        <View style={{ height: '90%', flexDirection: 'row', marginHorizontal: 8, alignItems: "center", justifyContent: "center", }}>
                            <View style={{ opacity: 0.5, width: '15%', backgroundColor: props?.ColorReducer?.isDarkThemeOn ? "red" : 'silver', height: 2, }} />
                            <View
                                style={{
                                    borderColor: props?.ColorReducer?.isDarkThemeOn ? "red" : '#707070',
                                    borderWidth: 2,
                                    borderRadius: wp('1%'),
                                    marginHorizontal: wp('0.5%'),
                                    paddingHorizontal: wp('1%'),
                                    paddingVertical: wp('0.4%'),
                                    width: "57%",
                                    height: "80%"
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text
                                        // numberOfLines={1}
                                        style={{
                                            fontSize: hp('1.5%'),
                                            width: wp('5%'),
                                            color: props?.ColorReducer?.weatherText,
                                            fontFamily: "OpenSans-Bold",
                                        }}>
                                        {t('WINDSPEED')}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: hp('1.5%'),
                                            color: props?.ColorReducer?.weatherText,
                                            fontFamily: "OpenSans-Bold",

                                        }}>
                                        kn
                                    </Text>
                                </View>
                                <View style={{ flexDirection: "row-reverse" }}>
                                    <WendSpeed size data="WeatherSpeed" wind />
                                </View>
                            </View>
                            <View style={{ alignSelf: 'center', opacity: 0.5, width: '15%', backgroundColor: props?.ColorReducer?.isDarkThemeOn ? "red" : 'silver', height: 2 }} />
                        </View>

                        <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ height: '100%', opacity: 0.5, width: 1, backgroundColor: props?.ColorReducer?.isDarkThemeOn ? "red" : 'silver' }} />
                        </View>
                    </View>
                </RotateImage>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    marginLeft: 20,
                    borderColor: props?.ColorReducer?.isDarkThemeOn ? "red" : '#707070',
                    borderWidth: 2,
                    alignSelf: 'center',
                    borderRadius: 20,
                    marginTop: -10
                }}>
                <View
                    style={{
                        width: '32%',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        marginHorizontal: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t('AIR TEMP')}
                        </Text>
                        <Text
                            style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                marginLeft: 30,
                            }}>
                            °C
                        </Text>
                    </View>
                    <WendSpeed data='AirTemp' />
                </View>

                <View
                    style={{
                        borderColor: props?.ColorReducer?.isDarkThemeOn ? "red" : '#707070',
                        borderWidth: 1,
                        marginVertical: 20,
                    }}
                />
                <View
                    style={{
                        width: '32%',
                        paddingHorizontal: 20,
                        padding: 5,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                        <Text
                            style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t('HUMIDITY')}
                        </Text>
                        <Text
                            style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                marginLeft: 50,
                            }}>
                            %
                        </Text>
                    </View>
                    <WendSpeed data='Humidity' />
                </View>
            </View>

            <View
                style={{
                    width: '35%',
                    borderColor: props?.ColorReducer?.isDarkThemeOn ? "red" : '#707070',
                    borderWidth: 2,
                    borderRadius: 20,
                    paddingHorizontal: 2,
                    paddingVertical: 1,
                    alignSelf: 'center',
                    marginHorizontal: 1,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>
                    <Text
                        style={{
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                        }}>
                        {t('AIR PRESSURE')}
                    </Text>
                    <Text
                        style={{
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                            marginLeft: 30,
                        }}>
                        hPa
                    </Text>
                </View>
                <WendSpeed data="AirPressure" />
            </View>
        </View>
    )
}

const mapStateToProps = ({ Mqtt, ColorReducer }) => ({
    Mqtt,
    ColorReducer
});

export default connect(mapStateToProps, {
    Increaseh
})(WeatherDataRightSIde);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});