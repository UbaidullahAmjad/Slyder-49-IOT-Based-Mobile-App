import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
function Design({ item, value, ColorReducer }) {
    const active = ColorReducer?.statusColor?.active
    const unactive = ColorReducer?.statusColor?.unactive
    return (
        <View style={{ flexDirection: "row", }}>
            <LinearGradient
                colors={value ? active : unactive}
                useAngle={true}
                angle={145}
                angleCenter={{ x: 0.7, y: 0.5 }}
                borderRadius={100}
                style={{
                    height: hp('3%'),
                    width: hp('3%'),
                    borderWidth: 2, borderColor: "#242424",
                    borderRadius: 100, alignSelf: "center"
                }}>

            </LinearGradient>
            <Text
                style={{
                    textTransform: 'uppercase',
                    color: ColorReducer?.tabtext,
                    fontFamily: 'OpenSans-ExtraBoldItalic',
                    fontSize: hp('3%'),
                    marginLeft: hp('1%')
                }}>
                {item}
            </Text>
        </View>
    )
}
const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});
export default connect(mapStateToProps, {
})(Design);