import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
function LongNeomorphButton({ number, skill, ColorReducer }) {
    return (
        <Neomorph
            inner={true} // <- enable inner shadow
            darkShadowColor="#151515" // <- set this
            lightShadowColor="#414141"
            style={{
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 1,
                shadowColor: 'white',
                shadowRadius: 3,
                borderRadius: 145,
                backgroundColor: '#313131',
                width: Dimensions.get('screen').width / 9,
                height: Dimensions.get('screen').width / 32,
                justifyContent: 'center',
                alignItems: 'center',
                // ...include most of View/Layout styles
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    width: Dimensions.get('screen').width / 9 - wp('0.8%'),
                    backgroundColor: '#313131',
                    borderRadius: 26,
                    height: Dimensions.get('screen').width / 32 - wp('0.7%'),
                }}>

                <RenderNumber number={number} colorget={ColorReducer?.primary} />

                <View
                    style={{
                        width: '16%',
                        flexDirection: 'row',
                        fontSize: 50,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: ColorReducer?.primary,
                            fontSize: hp('1.8%'),
                            textAlign: 'center',
                            fontFamily: "OpenSans-Regular",
                            fontStyle: 'italic'
                        }}>
                        {skill}
                    </Text>
                </View>
            </View>
        </Neomorph>
    )
}

function RenderNumber({ number, colorget }) {
    let view = []
    for (let i = 0; i < number.toString().length; i++) {
        view.push(
            <View
                key={i}
                style={{
                    width: '16%',
                    flexDirection: 'row',

                    alignSelf: 'center',
                    borderRightWidth: wp('0.05%'),
                    borderColor: '#B1B1B',

                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text

                    numberOfLines={1}
                    style={{ fontSize: hp('3%'), textAlign: 'center', color: colorget, fontFamily: "OpenSans-Regular" }}>
                    {number[i]}
                </Text>
            </View>
        )
    }
    return view
}

const mapStateToProps = ({ ColorReducer }) => ({

    ColorReducer
});

export default React.memo(connect(mapStateToProps, {

})(LongNeomorphButton));