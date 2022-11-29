import React from 'react';
import {
  Dimensions, LogBox, StyleSheet,
  Text, View
} from 'react-native';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../LocalizationContext';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import NumberMeter from '../../../../Component/NumberMeter';
import RoundedButtonStatusBar from '../../../../Component/SharedComponent/RoundedButtonStatusBar';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import store from '../../../../Store';
import { sailingSwitchesStatusChange } from '../../../../Store/Actions/SailingAction';
import { SAILING_HYDRO_GEN_STD, SAILING_WINCHES, SAILING_WINDLASS } from '../../../../Store/Actions/type';



LogBox.ignoreAllLogs();

function RightSideMenu(props) {
  const { t } = React.useContext(LocalizationContext);
  console.log(props?.SailingRight?.twa)
  return (
    <View style={styles.container}>
      <View style={{ width: "60%", height: "87%", justifyContent: "space-between", alignSelf: "center", paddingBottom: hp('2%') }}>
        <View
          style={{
            width: Dimensions.get('screen').width / 7,
            height: Dimensions.get('screen').height / 2.85,
            padding: 16,
            flexDirection: 'column',
            borderWidth: 0.7,
            borderColor: props?.ColorReducer?.iconNormalColor,
            borderRadius: 20,
          }}>
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: hp('2%'),
                color: props?.ColorReducer?.primary,
                fontFamily: "OpenSans-Bold",
              }}>
                SOG
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",

                }}>
                kn
              </Text>
            </View>
          </View>
          <Text
            numberOfLines={1}
            style={{
              fontSize: hp('8%'),
              marginTop: -hp('3%'),
              fontFamily: "DINAlternate-Bold",
              alignSelf: 'center',
              color: props?.ColorReducer?.primary,
            }}>
            {ReplaceDotandFixed(props?.SailingRight?.sog)}
          </Text>
          <View
            style={{
              height: 2,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: props?.ColorReducer?.iconNormalColor,
              flexDirection: 'row',
            }}></View>
          <View style={{ top: 6 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: hp('2%'),
                color: props?.ColorReducer?.primary,
                fontFamily: "OpenSans-Bold",
              }}>
                TWA
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",

                }}>
                °
              </Text>
            </View>
            <Text
              style={{
                alignSelf: 'center',
                color: props?.ColorReducer?.primary,
                marginTop: -hp('3%'),
                fontSize: hp('8%'),
                fontFamily: "DINAlternate-Bold",
              }}>
              {ReplaceDotandFixed(props?.SailingRight?.twa)}
            </Text>
          </View>
          <View
            style={{
              height: 2,
              top: 5,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: props?.ColorReducer?.iconNormalColor,
              flexDirection: 'row',
            }}></View>
          <View style={{ top: 0 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",
                  top: 10,

                }}>
                TWS
              </Text>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",
                  top: 10,
                  alignSelf: 'flex-end',
                }}>
                kn
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp('8%'),
                alignSelf: 'center',
                marginTop: -hp('2%'),
                color: props?.ColorReducer?.primary,
                fontFamily: "DINAlternate-Bold",
              }}>
              {props?.SailingRight?.tws}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width / 7,
            height: Dimensions.get('screen').height / 2.85,
            padding: 16,
            flexDirection: 'column',
            borderWidth: 0.7,
            borderColor: props?.ColorReducer?.iconNormalColor,
            borderRadius: 20,
          }}>
          <View>
            <View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",
                }}>
                  DTW
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                  }}>
                  nm
                </Text>
              </View>
            </View>
            <Text
              numberOfLines={1}
              style={{
                fontSize: hp('8%'),
                marginTop: -hp('3%'),
                fontFamily: "DINAlternate-Bold",
                alignSelf: 'center',
                color: props?.ColorReducer?.primary,
              }}>
              {ReplaceDotandFixed(props?.SailingRight?.dtw)}
            </Text>
            <View
              style={{
                height: 2,
                alignSelf: 'center',
                width: '90%',
                backgroundColor: props?.ColorReducer?.iconNormalColor,
                flexDirection: 'row',
              }}></View>
            <View style={{ top: 6 }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: props?.ColorReducer?.primary,
                  fontFamily: "OpenSans-Bold",
                }}>
                  TTW
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                  }}>
                  hrs
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: props?.ColorReducer?.primary,
                  marginTop: -hp('3%'),
                  fontSize: hp('8%'),
                  fontFamily: "DINAlternate-Bold",
                }}>
                {props?.SailingRight?.ttw}
              </Text>
            </View>
            <View
              style={{
                height: 2,
                top: 5,
                alignSelf: 'center',
                width: '90%',
                backgroundColor: props?.ColorReducer?.iconNormalColor,
                flexDirection: 'row',
              }}></View>
            <View style={{ top: 0 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                    top: 10,
                  }}>
                  ETA
                </Text>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                    top: 10,
                    alignSelf: 'flex-end',
                  }}>
                  24h
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{

                  fontSize: hp('6%'),
                  alignSelf: 'center',
                  color: props?.ColorReducer?.primary,
                  fontFamily: "DINAlternate-Bold",
                }}>
                {props?.SailingRight?.eta}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "40%", paddingTop: hp('5.5%'), marginBottom: hp('4%') }}>
        <View style={{ flex: 1, paddingTop: hp('20%') }}>
          <View>
            <CustomSwitch
              value={props?.SailingRight?.winches}
              onPress={winches} />
            <Text
              style={{
                color: props?.ColorReducer?.primary,
                fontFamily: "OpenSans-Bold",
                fontSize: hp('2%'),
                textAlign: 'center',
                marginTop: hp('1.5%')
              }}>
              {t('winches')}
            </Text>
          </View>
          <View style={{ marginTop: hp('5%') }}>
            <CustomSwitch
              value={props?.SailingRight?.windlass}
              onPress={windlass} />
            <Text
              style={{
                color: props?.ColorReducer?.primary,
                fontFamily: "OpenSans-Bold",
                fontSize: hp('2%'),
                textAlign: 'center',
                marginTop: hp('1.5%')
              }}>
              {t('windlass')}
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: hp('1%'), alignItems: "center", marginRight: wp('2%') }}>
          <RoundedButtonStatusBar
            value={props?.SailingRight?.hydro_gen_stb}
            onPress={hydrogenbb}
            fillColor={props?.SailingRight?.hydro_gen_stb ? '#98FF31' : '#606060'} />
          <Text
            style={{
              color: props?.ColorReducer?.primary,
              fontFamily: "OpenSans-Bold",
              fontSize: hp('2%'),
              marginVertical: hp('0.2%'),
            }}>
            {t('hydro gen stb')}
          </Text>
          <View style={{ marginTop: hp('2%') }}>
            <NumberMeter number={props?.SailingRight?.hydeogenstb} skill="kW" width={wp('1.5%')} />
          </View>
        </View>
      </View>
    </View>
  );
}

const winches = (val) => store.dispatch(sailingSwitchesStatusChange(val, 'slyderapp;sailing;winches;winches', SAILING_WINCHES))
const windlass = (val) => store.dispatch(sailingSwitchesStatusChange(val, 'slyderapp;sailing;windlass;windlass', SAILING_WINDLASS))
const hydrogenbb = () => store.dispatch(sailingSwitchesStatusChange(!store.getState().SailingRight?.hydro_gen_stb, 'slyderapp;sailing;hydro_gen_stb;hydro_gen_stb', SAILING_HYDRO_GEN_STD))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('5%'),
    marginLeft: wp('1.5%'),
    flexDirection: "row",

  },

});

const mapStateToProps = (state) => ({
  SailingRight: state.SailingRight,
  ColorReducer: state.ColorReducer
});

export default connect(mapStateToProps, {
  sailingSwitchesStatusChange
})(RightSideMenu);
