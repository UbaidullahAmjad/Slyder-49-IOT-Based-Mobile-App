import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    heightPercentageToDP as hp, widthPercentageToDP
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
function GeneratorButton({ title, onPressIn, onPressOut, stylee, Mqtt, ColorReducer, borderColor, marginLeft }) {
    return (
        <LinearGradient
            colors={['#616161', '#000000']}
            useAngle={true}
            angle={145}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={[stylee, { borderColor: borderColor, marginLeft: marginLeft ? widthPercentageToDP('0.5%') : 0 }]}>
            <TouchableOpacity
                disabled={Mqtt.client == null ? true : false}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[{ justifyContent: "center", alignItems: "center", width: "100%",  height: '100%', borderRadius: 100 }]}
            >
                <Text
                    style={{
                        fontSize: hp('2%'),
                        color: ColorReducer?.primary,
                        fontFamily: "OpenSans-Bold",
                        alignSelf: 'center',
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const mapStateToProps = ({ Mqtt, ColorReducer }) => ({
    Mqtt,
    ColorReducer
});

export default React.memo(connect(mapStateToProps, {
})(GeneratorButton));
