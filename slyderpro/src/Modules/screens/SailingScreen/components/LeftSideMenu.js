import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../LocalizationContext';
import CustomAlert from '../../../../Component/CustomAlert';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import GeneratorButton from '../../../../Component/Generator/GeneratorButton';
import LocalTime from '../../../../Component/LocalTime';
import NumberMeter from '../../../../Component/NumberMeter';
import RoundedButtonStatusBar from '../../../../Component/SharedComponent/RoundedButtonStatusBar';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import store from '../../../../Store';
import { sailingSwitchesStatusChange } from '../../../../Store/Actions/SailingAction';
import { SAILING_HYDRO_GEN_BB, SAILING_NAV_QUIPMENT } from '../../../../Store/Actions/type';
import { Log1resetStyle } from '../../../../Constant/CommonStyle';

function LeftSideMenu(props) {
  const [modalshow, setModalshow] = useState(false)
  const [modalsendValue, setModalsendValue] = useState('')
  const { t } = React.useContext(LocalizationContext);
  const log1Reset = React.useMemo(() => {
    return () => { setModalsendValue("slyderapp;sailing;log1;reset;True"), setModalshow(true) }
  }, [])
  const log2Reset = React.useMemo(() => {
    return () => { setModalsendValue("slyderapp;sailing;log2;reset;True"), setModalshow(true) }
  }, [])
  const CustomAlertonPress = React.useMemo(() => {
    return () => setModalshow(false)
  }, [])
  return (
    <View style={styles.container}>
      <View style={{ width: "40%", alignItems: "center", height: '100%', paddingTop: hp('5.5%'), }}>
        <View style={{ flex: 1 }}>
          <CustomSwitch
            value={props?.SailingLeft?.SailingNavQuipment}
            onPress={naveq}
          />
          <Text
            style={{
              color: props?.ColorReducer?.primary,
              fontFamily: "OpenSans-Bold",
              fontSize: hp('2%'),
              textAlign: 'center',
              marginTop: hp('1.5%')

            }}>
            {t('nav equipment')}
          </Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: hp('1%') }}>
          <RoundedButtonStatusBar
            value={props?.SailingLeft?.hydro_gen_bb}
            onPress={hydrogenbb}
            fillColor={props?.SailingLeft?.hydro_gen_bb ? '#98FF31' : '#606060'}


          />
          <Text
            style={{
              color: props?.ColorReducer?.primary,
              fontSize: hp('2%'),
              marginVertical: hp('0.2%'),
            }}>
            {t('hydro gen bb')}
          </Text>
          <View style={{ marginTop: hp('2%') }}>
            <NumberMeter number={props?.SailingLeft?.Kw} skill="kW" width={wp('1.5%')} />
          </View>

        </View>

      </View>
      <View style={{ width: "60%", height: "87%", alignItems: "center", justifyContent: "space-between", alignSelf: "center" }}>
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
                {t('SPEED')}
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
            style={{
              fontSize: hp('8%'),
              marginTop: -hp('3%'),
              fontFamily: "DINAlternate-Bold",
              alignSelf: 'center',
              color: props?.ColorReducer?.primary,
            }}>
            {ReplaceDotandFixed(props?.SailingLeft.SailingSpeed)}
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
                AWA
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
              {props?.SailingLeft?.awa}
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
                AWS
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
                marginTop: -hp('1%'),
                color: props?.ColorReducer?.primary,
                fontFamily: "DINAlternate-Bold",
              }}>
              {props?.SailingLeft?.aws}
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
                  {t('LOG 1')}
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
              style={{
                fontSize: hp('8%'),
                marginTop: -hp('3%'),
                fontFamily: "DINAlternate-Bold",
                alignSelf: 'center',
                color: props?.ColorReducer?.primary,
              }}>
              {props?.SailingLeft?.log1}
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
                  {t('LOG 2')}
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
              <Text
                style={{
                  alignSelf: 'center',
                  color: props?.ColorReducer?.primary,
                  marginTop: -hp('3%'),
                  fontSize: hp('8%'),
                  fontFamily: "DINAlternate-Bold",
                }}>
                {props?.SailingLeft?.log2}
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
                  {t('time')}
                </Text>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: props?.ColorReducer?.primary,
                    fontFamily: "OpenSans-Bold",
                    top: 10,
                    alignSelf: 'flex-end',

                  }}>
                  local
                </Text>
              </View>
              <LocalTime />
            </View>
          </View>
          {/* reset button */}
          <View
            style={[{ top: Dimensions.get('screen').width / heightPercentageToDP('5%') }, styles.resetbtn]}>
            <GeneratorButton
              title={'reset'}
              stylee={Log1resetStyle}
              onPressIn={log1Reset}
              borderColor={'#000000'}
            />
          </View>
          <View
            style={[{ top: Dimensions.get('screen').height / heightPercentageToDP('0.9%') }, styles.resetbtn]}>
            <GeneratorButton
              title={'reset'}
              stylee={Log1resetStyle}
              onPressIn={log2Reset}
              borderColor={'#000000'}
            />
          </View>
          {/* reset button */}
          <CustomAlert
            show={modalshow}
            value={modalsendValue}
            onPress={CustomAlertonPress} />
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = ({ SailingLeft, ColorReducer }) => ({
  SailingLeft,
  ColorReducer
});

export default connect(mapStateToProps, {
  sailingSwitchesStatusChange
})(LeftSideMenu);

const naveq = (val) => store.dispatch(sailingSwitchesStatusChange(val, 'slyderapp;sailing;nav_eq;nav_eq', SAILING_NAV_QUIPMENT))
const hydrogenbb = () => store.dispatch(sailingSwitchesStatusChange(!store.getState().SailingLeft?.hydro_gen_bb, 'slyderapp;sailing;hydro_gen_bb;hydro_gen_bb', SAILING_HYDRO_GEN_BB))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('5%'),
    marginLeft: wp('1.5%'),
    flexDirection: "row"

  },
  resetbtn: {
    position: 'absolute',
    left: -Dimensions.get('screen').width / 55,
  }
});