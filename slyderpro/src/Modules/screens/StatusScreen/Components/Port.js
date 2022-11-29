import React from 'react';
import { Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
function Port({ text, active, ColorReducer }) {
    return (
        <View>
            <Neomorph
                inner={true} // <- enable inner shadow
                darkShadowColor="#191919" // <- set this
                lightShadowColor="#444444"
                style={{
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 1,
                    shadowColor: '#000',
                    shadowRadius: 3,
                    borderRadius: 145,
                    backgroundColor: '#141414',
                    width: 3 / 100 * wp('100%'),
                    height: 3 / 100 * hp('100%'),
                    marginTop: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // ...include most of View/Layout styles
                }}>
                <View
                    style={{
                        width: 2.5 / 100 * wp('100%'),
                        height: 2 / 100 * hp('100%'),
                        backgroundColor: active ? ColorReducer?.statusColor?.active[0] : "#232526",
                        borderRadius: 100,
                        elevation: 10,
                        opacity: 100,
                    }}
                />
            </Neomorph>
            <Text
                style={{
                    fontSize: hp('2%'),
                    color: ColorReducer?.primary,
                    textAlign: 'center',
                    marginTop: 12,
                    fontFamily: "OpenSans-Bold",
                }}>
                {text}
            </Text>
        </View>
    )
}

const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {

})(Port)