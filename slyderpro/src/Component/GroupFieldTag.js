import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function GroupFieldTag({ width, title, props, languageScreen, rightBorderWidth, children, }) {
    return (
        <View style={{
            flex: 1,
            marginHorizontal: hp('5%'),
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderColor: props?.ColorReducer?.light,
            marginVertical: hp('5%'),
            width: width,
            padding: wp('2%'),
            alignSelf: "center",
        }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: - hp('6%'), marginLeft: -wp('2%') }}>
                <View style={{ borderColor: props?.ColorReducer?.light, borderWidth: 1.5, width: wp('5%'), }} />
                <Text style={{
                    fontSize: hp('3%'),
                    color: props?.ColorReducer?.light,
                    fontFamily: "OpenSans-ExtraBold",
                    width: languageScreen ? hp('40%') : hp('25%'),
                    textAlign: "center"
                }}>{title}</Text>
                <View style={{ borderColor: props?.ColorReducer?.light, borderWidth: 1.5, width: rightBorderWidth, }} />
            </View>
            {children}
        </View >
    )
}

const styles = StyleSheet.create({})