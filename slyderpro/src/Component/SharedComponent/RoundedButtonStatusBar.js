import React from 'react';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
function RoundedButtonStatusBar({ fillColor, onPress, Mqtt }) {
    return (
        <Neomorph
            inner={true} // <- enable inner shadow
            darkShadowColor={'#262626'}// <- set this
            lightShadowColor={'#363636'}
            style={{
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 10,
                shadowColor: '#fff',
                shadowRadius: 3,
                borderRadius: 200,
                backgroundColor: '#262626',
                width: widthPercentageToDP('2.8%'),
                height: widthPercentageToDP('2.8%'),
                justifyContent: 'center',
                alignItems: "center"
            }}>
            <LinearGradient
                colors={['#515151', '#191919']}
                useAngle={true}
                angle={145}
                angleCenter={{ x: 0.7, y: 0.5 }}
                style={{
                    width: widthPercentageToDP('2.3%'),
                    height: widthPercentageToDP('2.3%'),
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                }}

            >
                <TouchableWithoutFeedback
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={onPress}
                    disabled={Mqtt.client == null ? true : false}
                >
                    <View
                        style={{
                            borderWidth: Dimensions.get('screen').width / 500,
                            width: Dimensions.get('screen').width / 110,
                            borderRadius: 2,
                            borderColor: fillColor,
                        }}
                    />
                </TouchableWithoutFeedback>
            </LinearGradient>
        </Neomorph>
    )
}

const mapStateToProps = ({ Mqtt }) => ({
    Mqtt,

});

export default connect(mapStateToProps, {

})(RoundedButtonStatusBar);


