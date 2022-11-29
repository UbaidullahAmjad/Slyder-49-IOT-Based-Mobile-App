import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import store from '../Store'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux'

function MOB(props) {
    useEffect(() => {

    }, [props?.Mqtt?.client])
    return (
        <View
            style={[{
                position: "absolute",
                right: 24,
                top: 24,
            }, props?.container]}>
            <Neomorph
                inner={true} // <- enable inner shadow
                darkShadowColor={props?.insideColor ? props?.insideColor?.upper : "#550B02"} // <- set this
                lightShadowColor={props?.insideColor ? props?.insideColor?.lower : "#6F251C"}
                style={{
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 1,
                    shadowColor: '#000',
                    shadowRadius: 1,
                    borderRadius: hp('4%'),
                    backgroundColor: props?.insideColor ? props?.insideColor?.lower : '#6F251C',
                    width: wp('7.5%'),
                    height: wp('7.5%'),
                    justifyContent: "center",
                    alignItems: "center"

                    // ...include most of View/Layout styles
                }}>
                <LinearGradient
                    colors={['#4B4B4B', '#1F1F1F']}
                    angle={145}
                    angleCenter={{ x: 0.5, y: 1 }}
                    style={{
                        width: wp('6.7%'),
                        height: wp('6.7%'),
                        borderRadius: hp('4%'),
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: '#000',


                    }}>
                    <TouchableOpacity
                        disabled={props.Mqtt.client == null && props?.notdisable == false ? true : false}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" ,  width: wp('6.3%'),}}
                        onPress={props?.onPress}
                    >
                        <Text
                            style={{
                                color: props?.ColorReducer?.primary,
                                fontSize: hp('2.8%'),
                                fontWeight: '500'
                            }}>
                            {props?.title == "MOB" ? "MOB" : props?.ColorReducer?.isDarkThemeOn ? "DAY" : 'NIGHT'}
                        </Text>
                    </TouchableOpacity>

                </LinearGradient>
            </Neomorph>

        </View>
    )
}

const mapStateToProps = ({ Mqtt, ColorReducer }) => ({
    Mqtt,
    ColorReducer
});

export default connect(mapStateToProps, {

})(MOB);