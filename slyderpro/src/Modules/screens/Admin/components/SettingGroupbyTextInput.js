import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function SettingGroupbyTextInput({ backgroundColor, title, onChangeText, value }) {
    return (
        <TextInput
            style={[styles.input, { backgroundColor: backgroundColor }]}
            value={value.toString()}
            onChangeText={onChangeText}
            // placeholder={title}
            keyboardType='numeric'
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: Dimensions.get('screen').height / 14,
        width: wp('5%'),
        marginRight: wp('1%'),
        borderWidth: 1,
        textAlign: "center",
        fontSize: hp('3%'),
        borderRadius: 10,
        color: 'black',
        fontFamily: "OpenSans-Regular",
        borderWidth: 0
    },
});