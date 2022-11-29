import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { resetbtnmqtt } from '../Store/Actions/UnderEngineActions';
import store from '../Store';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import LocalizationContext from '../../LocalizationContext'

function CustomAlert({ show, value, onPress, ColorReducer }) {
    console.log("custom alert")
    const { t } = React.useContext(LocalizationContext);

    return (
        <Modal
            visible={show}
            transparent={true}
        >
            <View

                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <LinearGradient
                    colors={ColorReducer?.bgColor}
                    style={{ width: wp("25%"), height: hp('25%'), paddingVertical: wp('1.5%'), paddingHorizontal: wp('1.5%'), borderRadius: wp('1%') }}>
                    <Text style={{
                        fontSize: hp('3%'),
                        color: ColorReducer?.secondaryLight,
                        fontFamily: "OpenSans-ExtraBold",
                        textShadowColor: ColorReducer?.isDarkThemeOn ? "#B3001C" : 'rgba(255,255,255,.28)',
                        textShadowOffset: { width: -0.1, height: ColorReducer?.isDarkThemeOn ? 0 : 1.1 },
                        textShadowRadius: 1,
                    }}>
                        {t('Are you sure')}
                    </Text>
                    <View style={{
                        flex: 1,
                        justifyContent: "flex-end"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-end"
                        }}>
                            <TouchableOpacity
                                onPress={onPress}
                            >
                                <Text style={{
                                    marginRight: wp('2%'),
                                    fontSize: hp('2%'),
                                    color: ColorReducer?.secondaryLight,
                                    fontFamily: "OpenSans-ExtraBold",
                                    textShadowColor: ColorReducer?.isDarkThemeOn ? "#B3001C" : 'rgba(255,255,255,.28)',
                                    textShadowOffset: { width: -0.1, height: ColorReducer?.isDarkThemeOn ? 0 : 1.1 },
                                    textShadowRadius: 1,
                                }}>{t('CANCEL')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => store.dispatch(resetbtnmqtt(value))}
                                onPressOut={onPress}
                            >
                                <Text style={{
                                    fontSize: hp('2%'),
                                    color: ColorReducer?.secondaryLight,
                                    fontFamily: "OpenSans-ExtraBold",
                                    textShadowColor: ColorReducer?.isDarkThemeOn ? "#B3001C" : 'rgba(255,255,255,.28)',
                                    textShadowOffset: { width: -0.1, height: ColorReducer?.isDarkThemeOn ? 0 : 1.1 },
                                    textShadowRadius: 1,
                                }}>{t('YES')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </Modal>
    )
}

const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default React.memo(connect(mapStateToProps, {

})(CustomAlert));