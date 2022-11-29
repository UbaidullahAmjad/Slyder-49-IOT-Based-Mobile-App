import React from 'react';
import { Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
function ScaleComparing(props) {
  return (
    <View style={{ width: wp('8%'), alignItems: 'center', }}>
      <View style={{ marginBottom: 12, width: '100%' }}>
        <Text
          style={{
            fontSize: hp('3.5%'),
            color: props?.numberColor,
            marginLeft: 16,
            textAlign: 'center',
            fontFamily: "OpenSans-SemiBold"
          }}>
          {props.fill}%
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',

          justifyContent: "center",
          right: wp('0.9%')

        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingVertical: hp('1%'),
            marginRight: wp('0.5%'),
          }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row-reverse',
                }}>
                <Neomorph
                  inner // <- enable inner shadow
                  darkShadowColor="gray" // <- set this
                  lightShadowColor="gray"
                  style={{
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 1,
                    shadowColor: 'gray',
                    shadowRadius: 0,
                    borderRadius: 150,
                    backgroundColor: 'gray',
                    width: index == 0 || index == 10 || index == 5 ? wp('1.5%') : wp('0.9%'),
                    height: hp('0.5%'),
                  }}>
                  <View
                    style={{
                      width: index == 0 || index == 10 || index == 5 ? wp('1.5%') : wp('0.9%'),
                      height: hp('0.3%'),
                      backgroundColor: '#000',
                      borderRadius: 150,
                    }}
                  />
                </Neomorph>
              </View>
            );
          })}
        </View>
        <Neomorph
          inner={true} // <- enable inner shadow
          darkShadowColor={props?.fill == 0 ? "#000" : props?.skillColor}// <- set this
          lightShadowColor={props?.fill == 0 ? "#736D69" : props?.skillColor}
          style={{
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 10,
            shadowColor: '#fff',
            shadowRadius: 3,
            borderRadius: 200,
            backgroundColor: props?.fill == 0 ? '#736D69' : props?.skillColor,
            width: 12 / 100 * wp('16%'),
            height: 43 / 100 * hp('100%'),
            justifyContent: 'center',
            // ...include most of View/Layout styles
          }}>
          <View
            style={{
              overflow: 'hidden',
              flexDirection: 'row',
              width: 8 / 100 * wp('16%'),
              height: 41 / 100 * hp('100%'),
              backgroundColor: '#252525',
              borderRadius: 100,
              alignSelf: 'center',
              elevation: 30,
            }}>
            <View
              style={{
                width: '100%',
                height: `${props.fill}%`,
                backgroundColor: props?.tubeColor,
                borderRadius: 100,
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </Neomorph>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text
          style={{
            color: props?.titleColor,
            fontSize: hp('2%'),
            textAlign: 'center',
            fontFamily: 'OpenSans-Bold'
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            color: props?.titleColor,
            fontSize: hp('2%'),
            textAlign: 'center',
            fontFamily: 'OpenSans-Bold'
          }}>
          {props.scale}
        </Text>
      </View>
    </View>
  );
}

export default React.memo(ScaleComparing)
