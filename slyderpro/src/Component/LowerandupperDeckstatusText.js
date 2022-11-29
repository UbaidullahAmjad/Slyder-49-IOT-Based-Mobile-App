import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../LocalizationContext';

function LowerandupperDeckstatusText({ screen, onPress, ColorReducer }) {
    const { t } = React.useContext(LocalizationContext);

    const active = ColorReducer?.statusColor?.active
    const unactive = ColorReducer?.statusColor?.unactive
    console.log("lower and upper deck text")
    return (
        <View>
            <TouchableOpacity
                activeOpacity={10}
                disabled={screen == 'upper' ? true : false}
                onPress={onPress}
                style={{ flexDirection: "row", }} >
                <LinearGradient
                    colors={screen == 'upper' ? active : unactive}
                    useAngle={true}
                    angle={145}
                    angleCenter={{ x: 0.7, y: 0.5 }}
                    borderRadius={100}
                    style={{
                        height: heightPercentageToDP('3%'),
                        width: heightPercentageToDP('3%'),
                        borderWidth: 2,
                        borderColor: "#242424",
                        borderRadius: 100,
                        alignSelf: "center",
                    }}>
                </LinearGradient>
                <View style={{
                    justifyContent: "center",
                    marginLeft: heightPercentageToDP('1%')
                }}>
                    <Text
                        style={{

                            color: ColorReducer?.tabtext,
                            fontFamily: 'OpenSans-ExtraBoldItalic',
                            fontSize: screen == 'upper' ? heightPercentageToDP('3%') : heightPercentageToDP('2%'),
                            marginLeft: heightPercentageToDP('1%')
                        }}>
                        {t('UPPER DECK')}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={10}
                onPress={onPress}
                disabled={screen == 'lower' ? true : false}
                style={{
                    flexDirection: "row",
                    marginTop: heightPercentageToDP('3%'),
                }}>
                <LinearGradient
                    colors={screen == 'lower' ? active : unactive}
                    useAngle={true}
                    angle={145}
                    angleCenter={{ x: 0.7, y: 0.5 }}
                    borderRadius={100}
                    style={{
                        height: heightPercentageToDP('3%'),
                        width: heightPercentageToDP('3%'),
                        borderWidth: 2,
                        borderColor: "#242424",
                        borderRadius: 100,
                        alignSelf: 'center'
                    }}>

                </LinearGradient>
                <View style={{
                    marginLeft: heightPercentageToDP('1%'),
                }}>
                    <Text
                        style={{
                            color: ColorReducer?.tabtext,
                            fontFamily: 'OpenSans-ExtraBoldItalic',
                            fontSize: screen == 'lower' ? heightPercentageToDP('3%') : heightPercentageToDP('2%'),
                            marginLeft: heightPercentageToDP('1%')
                        }}>
                        {t('LOWER DECK')}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {

})(LowerandupperDeckstatusText);