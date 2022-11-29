import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import NumberMeter from '../../../../Component/NumberMeter';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';

function BottomLayoutElectric(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '50%',
          height: '100%',
          flexDirection: 'row',
          paddingTop: '0.3%',
        }}>
        <View style={{ width: '15.7%', height: '100%' }} />
        <View
          style={{
            width: '24.5%',
            height: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: '34%',
              flexDirection: 'row',
            }}>
            <View style={{ width: '30%', height: '100%' }} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <NumberMeter number={'TBD'} skill="kW" width={wp('1.8%')} />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: '24%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NumberMeter number={`${ReplaceDotandFixed(props?.ElectricBottom?.rpm).toString().substring(0, 4)}`} skill="rpm" width={0} />
          </View>
        </View>
        <View style={{ width: '5%' }} />
        <View
          style={{
            width: '55%',
            height: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
                width: Dimensions.get('screen').width / 11.5,
                height: Dimensions.get('screen').width / 32,
                justifyContent: 'center',
                alignItems: 'center',

                // ...include most of View/Layout styles
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: Dimensions.get('screen').width / 11.5 - wp('0.7%'),
                  backgroundColor: '#313131',
                  height: Dimensions.get('screen').width / 32 - wp('0.7%'),
                  borderRadius: 100,
                }}>
                <View
                  style={{
                    width: '33.33%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: hp('3%'),
                    borderRightWidth: wp('0.05%'),
                    borderColor: '#B1B1B',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: hp('2.4%'), fontFamily: 'OpenSans-Regular',
                      color: props?.ColorReducer?.primary
                    }}>
                    {props?.ElectricBottom?.engbb}
                  </Text>
                </View>
                <View
                  style={{
                    width: '33.33%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: hp('3%'),
                    borderRightWidth: wp('0.05%'),
                    borderColor: '#B1B1B',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{ fontStyle: 'italic', fontSize: hp('2%'), color: props?.ColorReducer?.primary }}>
                    kW
                  </Text>
                </View>

                <View
                  style={{
                    width: '33.33%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{ fontSize: hp('2.4%'), fontFamily: 'OpenSans-Regular', color: props?.ColorReducer?.primary }}>
                    {props?.ElectricBottom?.engstb}
                  </Text>
                </View>
              </View>
            </Neomorph>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '48.5%',
          height: '100%',

          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: '25%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: props?.ColorReducer?.lightDarkColor,
                  padding: 12,
                  borderRadius: 12,
                }}>
                <NumberMeter number={props?.ElectricBottom?.ac} skill="A" width={wp('1.5%')} />
              </View>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  textAlign: 'center',
                  marginTop: 24,
                  fontWeight: 'bold',
                }}>
                {' '}
                230V ac
              </Text>
            </View>
            <View>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: props?.ColorReducer?.lightDarkColor,
                  padding: 12,
                  borderRadius: 12,
                  marginRight: '1%',
                }}>
                <NumberMeter number={props?.ElectricBottom?.dc24} skill="A" width={wp('1.5%')} />
              </View>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  textAlign: 'center',
                  marginTop: 24,
                  fontWeight: 'bold',
                }}>
                {' '}
                24V dc
              </Text>
            </View>
            <View>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: props?.ColorReducer?.lightDarkColor,
                  padding: 12,
                  borderRadius: 12,
                  // marginRight:"3%"
                }}>
                <NumberMeter number={props?.ElectricBottom?.dc12} skill="A" width={wp('1.5%')} />
              </View>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  textAlign: 'center',
                  marginTop: 24,
                  fontWeight: 'bold',
                }}>
                {' '}
                12V dc
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
const mapStateToProps = ({ ElectricBottom , ColorReducer }) => ({
  ElectricBottom,
  ColorReducer
});
export default connect(mapStateToProps, {

})(BottomLayoutElectric);