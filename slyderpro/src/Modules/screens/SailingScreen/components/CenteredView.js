import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../LocalizationContext';
import POSGPS from '../../../../Component/POSGPS';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import FastImageSailing from './FastImageSailing';
import RudderImage from './RudderImage';

function CenteredView(props) {
  const { t } = React.useContext(LocalizationContext);
  return (
    <View style={{ flex: 1, paddingTop: hp('3%'), alignItems: 'center', marginBottom: hp('4%'), }}>
      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <POSGPS />
          <View>
            <FastImageSailing
              imageIndex={1}
              imageTransform={90}
              imageLeft={-Dimensions.get('window').height / 80}
              imagePosition={"absolute"}
              imageHeight={Dimensions.get('window').height / 1.6}
              imageWidth={Dimensions.get('window').height / 1.6}
              imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/YELLOWRee.png') : require('../../../../../images/YELLOW.png')}
            />

            <FastImageSailing
              tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.40)' : null}
              imageTop={Dimensions.get('window').height / 25}
              imagePosition={"absolute"}
              imageHeight={Dimensions.get('window').height / 1.6}
              imageWidth={Dimensions.get('window').height / 1.6}
              imageSource={require('../../../../../images/compoenentimages/sailing.png')}
            />

            <FastImageSailing
              tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.40)' : null}
              imageTop={Dimensions.get('window').height / 30}
              imageLeft={-wp('0.5')}
              imagePosition={"absolute"}
              imageHeight={Dimensions.get('window').height / 1.55}
              imageWidth={Dimensions.get('window').height / 1.55}
              imageSource={require('../../../../../images/compoenentimages/greycircle.png')}
            />
            <FastImageSailing
              imageTop={Dimensions.get('window').height / 20}
              imageTransform={-35}
              imagePosition={"absolute"}
              imageHeight={Dimensions.get('window').height / 1.6}
              imageWidth={Dimensions.get('window').height / 1.6}
              imageSource={require('../../../../../images/red.png')}
            />

            <FastImageSailing
              imageTop={Dimensions.get('window').height / 25}
              imageTransform={-100}
              imageLeft={wp('0.3')}
              imagePosition={"absolute"}
              imageHeight={Dimensions.get('window').height / 1.6}
              imageWidth={Dimensions.get('window').height / 1.6}
              imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/GREENRed.png') : require('../../../../../images/GREEN.png')}
            />

            <FastImageSailing
              tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.20)' : null}
              imageTop={Dimensions.get('window').height / 25}
              imageHeight={Dimensions.get('window').height / 1.6}
              imageWidth={Dimensions.get('window').height / 1.6}
              imageSource={require('../../../../../images/compoenentimages/white.png')}
            />

            <FastImageSailing
              tintColor={props?.ColorReducer?.isDarkThemeOn ? 'rgba(255,0,0,0.70)' : null}
              imageTop={hp('4.7')}
              imageLeft={wp('0.3')}
              imagePosition={"absolute"}
              imageTransform={-props?.SailingCenter?.Heading}
              imageHeight={Dimensions.get('window').height / 1.63}
              imageWidth={Dimensions.get('window').height / 1.63}
              imageSource={require('../../../../../images/onlyNumber.png')}
            />

            <FastImageSailing
              imageTop={Dimensions.get('window').height / 22}
              imagePosition={"absolute"}
              imageTransform={props?.SailingCenter?.TImage}
              imageHeight={Dimensions.get('window').height / 1.6}
              imageWidth={Dimensions.get('window').height / 1.6}
              imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/redtag.png') : require('../../../../../images/bluetag.png')}
            />

            <FastImageSailing
              imageTop={Dimensions.get('window').height / 13.5}
              imagePosition={"absolute"}
              imageTransform={-55}
              imageHeight={Dimensions.get('window').height / 1.97}
              imageWidth={Dimensions.get('window').height / 1.9}
              imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/BLUEARed.png') : require('../../../../../images/BLUEA.png')}
            />

            <FastImageSailing
              imageTop={Dimensions.get('window').height / 70}
              imagePosition={"absolute"}
              imageTransform={40}
              imageHeight={Dimensions.get('window').height / 1.69}
              imageWidth={Dimensions.get('window').height / 1.69}
              imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/ORANGERee.png') : require('../../../../../images/ORANGE.png')}
            />

            <View
              style={{
                backgroundColor: props?.ColorReducer?.isDarkThemeOn ? '#1A1C1D' : 'white',
                width: Dimensions.get('screen').width / 16,
                height: Dimensions.get('screen').height / 14,
                position: 'absolute',
                alignSelf: 'center',
                borderColor: props?.ColorReducer?.isDarkThemeOn ? '#951212' : '#434748',
                top: hp('4%'),
                borderWidth: wp('0.3%'),
                borderRadius: wp('1%'),
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text style={{
                color: props?.ColorReducer?.isDarkThemeOn ? "#951212" : '#9E9EA6',
                fontFamily: "OpenSans-Bold",
                fontSize: hp('4%'),
                alignSelf: 'center'
              }}>{ReplaceDotandFixed(props?.SailingCenter?.Heading)}</Text>
            </View>

            <FastImageSailing
              imageTop={hp('0.7%')}
              imagePosition={"absolute"}
              imageHeight={Dimensions.get('window').height / 1.4}
              imageWidth={Dimensions.get('window').height / 1.5}
              imageSource={props?.ColorReducer?.isDarkThemeOn ? require('../../../../../images/compoenentimages/rightRed.png') : require('../../../../../images/compoenentimages/right.png')}
              imageLeft={wp('0.4%')}
            />
            <RudderImage props={props} />
            <Text style={{
              color: props?.ColorReducer?.isDarkThemeOn ? '#951212' : 'white',
              position: 'absolute', fontFamily: "OpenSans-Bold",
              fontSize: hp('2.5'), right: wp('15.4%'),
              alignSelf: 'center', top: hp('34%')
            }}>
              {`2.7`}
            </Text>
            <Text style={{ color: props?.ColorReducer?.isDarkThemeOn ? '#FF2137' : '#AD4293', position: 'absolute', fontFamily: "OpenSans-Bold", fontSize: hp('2.2'), alignSelf: 'center', top: hp('47%') }}> {`${ReplaceDotandFixed(props?.SailingCenter?.RudderPosition)}°`}</Text>
          </View>
        </View>
      </View>
      {/* Bottom Section */}
      <View style={{ width: "85%", flexDirection: "row", justifyContent: "space-between", alignSelf: "center" }}>
        <View style={{ width: '50%' }}>
          <View
            style={{
              width: "100%",
              justifyContent: 'center',
              borderWidth: 1.5,
              borderColor: props?.ColorReducer?.iconNormalColor,
              borderRadius: 20,
              height: hp('15%')
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",
                  paddingLeft: "8%"
                }}>
                  {t('WATER TEMP')}
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                    paddingRight: '8%'
                  }}>
                  °C
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 20,
                    marginTop: -15,
                    fontSize: hp('8%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "DINAlternate-Bold",
                  }}
                  numberOfLines={1}
                >
                  {ReplaceDotandFixed(props?.SailingCenter?.waterTemp)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: '40%' }}>
          <View
            style={{
              width: "100%",
              justifyContent: 'center',
              borderWidth: 1.5,
              borderColor: props?.ColorReducer?.iconNormalColor,
              borderRadius: 20,
              height: hp('15%')
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",
                  paddingLeft: "8%"
                }}>
                  {t('DEPTH')}
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                    paddingRight: '8%'
                  }}>
                  m
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    textAlign: 'center',
                    marginLeft: 20,
                    marginTop: -15,
                    fontSize: hp('8%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "DINAlternate-Bold",
                  }}>
                  {ReplaceDotandFixed(props?.SailingCenter?.Dept)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  SailingCenter: state.SailingCenter,
  ColorReducer: state.ColorReducer
});

export default connect(mapStateToProps, {

})(CenteredView);



