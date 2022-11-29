import React from 'react';
import { Text, View } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

function POSGPS(props) {
    return (
        <View
            style={{
                borderWidth: 0.7,
                // width: "69%",
                borderColor: props?.ColorReducer?.iconNormalColor,
                borderRadius: 20,
                padding: 10,
                paddingHorizontal: 12,
                width: wp('27.5')
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                }}>POS</Text>
                <Text
                    style={{
                        // alignSelf: 'flex-end',
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        fontFamily: "OpenSans-Bold",
                    }}>
                    GPS
                </Text>
            </View>
            <Text
                style={{
                    fontSize: hp('3.7%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "DINAlternate-Bold",

                    alignSelf: 'center',
                    letterSpacing: 0.74,
                    paddingHorizontal: 10,
                    width: wp('27.5'),
                    textAlign: "center"
                }}>

                {props?.GPSDirection?.North} | {props?.GPSDirection?.West}
            </Text>
        </View>
    )
}

const mapStateToProps = ({ GPSDirection, ColorReducer }) => ({
    GPSDirection,
    ColorReducer
});

export default connect(mapStateToProps, {

})(POSGPS);
