import {StackActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import LocalizationContext from '../../../../LocalizationContext';
import GroupFieldTag from '../../../Component/GroupFieldTag';
import Container from '../../../Component/SharedComponent/Container';
import {statusColorStatus} from '../../../Store/Actions/StatusAction';
import SettingGroupbyTextInput from './components/SettingGroupbyTextInput';
import {
  CHNAGE_FRESHWATER_COLOR_SCALE,
  CHNAGE_BLACKWATER_COLOR_SCALE,
  CHNAGE_DIESEL_COLOR_SCALE,
} from '../../../Store/Actions/type';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';
import store from '../../../Store';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function Setting(props) {
  const {t} = React.useContext(LocalizationContext);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(t('Meters per second [m/s]'));
  const [items, setItems] = useState([
    {label: t('Meters per second [m/s]'), value: t('Meters per second [m/s]')},
    {label: t('Knots [kn]'), value: t('Knots [kn]')},
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(t('Kelvin [K]'));
  const [items1, setItems1] = useState([
    {label: t('Kelvin [K]'), value: t('Kelvin [K]')},
    {label: t('Degree Celsius [°C]'), value: t('Degree Celsius [°C]')},
  ]);

  const [freshwaterlow, setfreshwaterlow] = useState('');
  const [freshwaterreserve, setfreshwaterreserve] = useState('');
  const [blackwaterreserve, setblackwaterreserve] = useState('');
  const [blackwaterlow, setblackwaterlow] = useState('');
  const [dieselwaterreserve, setdieselwaterreserve] = useState('');
  const [depth, setDepth] = useState('');
  const [dieselwaterlow, setdieselwaterlow] = useState('');

  React.useEffect(() => {
    const unsubscribe = props?.navigation.addListener('blur', () => {
      props?.navigation.dispatch(StackActions.pop());
    });
    return unsubscribe;
  }, [props?.navigation]);

  React.useEffect(() => {
    setfreshwaterlow(props?.WaterDieselEvent?.freshwaterColorScale.low);
    setfreshwaterreserve(props?.WaterDieselEvent?.freshwaterColorScale.reserve);
    setblackwaterreserve(props?.WaterDieselEvent?.blackwaterColorScale.reserve);
    setblackwaterlow(props?.WaterDieselEvent?.blackwaterColorScale.low);
    setdieselwaterreserve(props?.WaterDieselEvent?.DiesilColorScale.reserve);
    setdieselwaterlow(props?.WaterDieselEvent?.DiesilColorScale.low);
  }, [props?.navigation]);

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        console.log('SWIPE_UP');
        break;
      case SWIPE_DOWN:
        console.log('SWIPE_DOWN');
        break;
      case SWIPE_LEFT:
        console.log('SWIPE_LEFT');
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Weather Data');
        store.dispatch(ChangedScreen('weather'));
        break;
    }
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      config={config}
      style={{
        flex: 1,
      }}>
      <Container>
        <TouchableOpacity
          onPress={() => props?.navigation.goBack()}
          style={{
            marginTop: hp('5%'),
            marginLeft: wp('10%'),
          }}>
          <AntDesign
            name="arrowleft"
            color={props?.ColorReducer?.light}
            size={40}
          />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <GroupFieldTag
            width={wp('80%')}
            title={t('General')}
            props={props}
            rightBorderWidth={wp('61.5%')}>
            <GroupFieldTag
              width={wp('70%')}
              title={t('Units')}
              props={props}
              rightBorderWidth={wp('51.5%')}>
              <View style={{flex: 1, marginTop: hp('2%')}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: props?.ColorReducer?.light,
                      fontSize: hp('2.5%'),
                      fontFamily: 'OpenSans-ExtraBold',
                      width: '20%',
                    }}>
                    {t('Speed')}
                  </Text>
                  <View>
                    <DropDownPicker
                      zIndex={3000}
                      zIndexInverse={1000}
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      onChangeValue={item => {
                        console.log(item);
                      }}
                      textStyle={{
                        color: 'black',
                        fontSize: hp('2.5%'),
                      }}
                      dropDownContainerStyle={{
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? '#631818'
                          : '#fff',
                        borderWidth: 0,
                        height: Dimensions.get('screen').height / 8,
                        width: Dimensions.get('screen').width / 2,
                      }}
                      dropDownDirection="DEFAULT"
                      style={{
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? '#rgba(255,0,0,0.30)'
                          : '#fff',
                        marginVertical: hp('1%'),
                        borderWidth: 0,
                        height: Dimensions.get('screen').height / 12,
                        width: Dimensions.get('screen').width / 2,
                      }}
                      listMode="SCROLLVIEW"
                      scrollViewProps={{
                        nestedScrollEnabled: true,
                      }}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: props?.ColorReducer?.light,
                      fontFamily: 'OpenSans-ExtraBold',
                      fontSize: hp('2.5%'),
                      width: '20%',
                    }}>
                    {t('Temperature')}
                  </Text>
                  <View>
                    <DropDownPicker
                      zIndex={2000}
                      zIndexInverse={2000}
                      open={open1}
                      value={value1}
                      items={items1}
                      setOpen={setOpen1}
                      setValue={setValue1}
                      setItems={setItems1}
                      onChangeValue={item => {
                        console.log(item);
                      }}
                      textStyle={{
                        color: 'black',
                        fontSize: hp('2.5%'),
                      }}
                      dropDownContainerStyle={{
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? '#631818'
                          : '#fff',
                        borderWidth: 0,
                        height: Dimensions.get('screen').height / 8,
                        width: Dimensions.get('screen').width / 2,
                      }}
                      dropDownDirection="DEFAULT"
                      style={{
                        marginVertical: hp('2%'),
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? 'rgba(255,0,0,0.30)'
                          : '#fff',
                        borderWidth: 0,
                        height: Dimensions.get('screen').height / 12,
                        width: Dimensions.get('screen').width / 2,
                      }}
                      listMode="SCROLLVIEW"
                      scrollViewProps={{
                        nestedScrollEnabled: true,
                      }}
                    />
                  </View>
                </View>
              </View>
            </GroupFieldTag>
            <GroupFieldTag
              width={wp('70%')}
              title={t('Warning')}
              props={props}
              rightBorderWidth={wp('51.5%')}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '45%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {t('Depth')}
                      {' <='}
                    </Text>
                  </View>
                  <View style={{marginLeft: wp('1%')}}>
                    <SettingGroupbyTextInput
                      backgroundColor={
                        props?.ColorReducer?.isDarkThemeOn ? '#631818' : 'white'
                      }
                      title={t('Depth')}
                      onChangeText={text => setDepth(text)}
                      value={depth}
                    />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {'m'}
                    </Text>
                  </View>
                </View>
              </View>
            </GroupFieldTag>
          </GroupFieldTag>

          <GroupFieldTag
            width={wp('80%')}
            title={t('Status')}
            props={props}
            rightBorderWidth={wp('61.5%')}>
            <GroupFieldTag
              width={wp('70%')}
              title={t('Fresh Water')}
              languageScreen
              props={props}
              rightBorderWidth={wp('43.5%')}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    width: '45%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                    marginRight: wp('2%'),
                    justifyContent: 'center',
                    borderRightWidth: 2,
                    borderColor: props?.ColorReducer?.secondary,
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {t('Reserve')}
                      {' <'}
                    </Text>
                  </View>
                  <View style={{marginLeft: wp('1%')}}>
                    <SettingGroupbyTextInput
                      backgroundColor={
                        props?.ColorReducer?.isDarkThemeOn ? '#631818' : 'white'
                      }
                      title={t('Reserve')}
                      onChangeText={text => setfreshwaterreserve(text)}
                      value={freshwaterreserve}
                    />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {'%'}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '15%',
                      borderRadius: 8,
                      height: '100%',
                      backgroundColor: 'red',
                      marginLeft: wp('2%'),
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '50%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: hp('2.5%'),
                          color: props?.ColorReducer?.light,
                          fontFamily: 'OpenSans-ExtraBold',
                        }}>
                        {t('Low')}
                        {' <'}
                      </Text>
                    </View>
                    <View
                      style={{marginLeft: wp('1%'), justifyContent: 'center'}}>
                      <SettingGroupbyTextInput
                        backgroundColor={
                          props?.ColorReducer?.isDarkThemeOn
                            ? '#631818'
                            : 'white'
                        }
                        title={t('Low')}
                        onChangeText={text => setfreshwaterlow(text)}
                        value={freshwaterlow}
                      />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: hp('2.5%'),
                          color: props?.ColorReducer?.light,
                          fontFamily: 'OpenSans-ExtraBold',
                        }}>
                        {'%'}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '18%',
                        borderRadius: 8,
                        height: '100%',
                        backgroundColor: '#F8E81E',
                        marginLeft: wp('2%'),
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      if (freshwaterlow != null && freshwaterreserve != null) {
                        props?.statusColorStatus(
                          CHNAGE_FRESHWATER_COLOR_SCALE,
                          freshwaterlow,
                          freshwaterreserve,
                        );
                      }
                    }}
                    style={[
                      styles.btn,
                      {
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? '#rgba(255,0,0,0.30)'
                          : '#000',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.btntext,
                        {
                          color: props?.ColorReducer?.isDarkThemeOn
                            ? 'rgba(255,0,0,0.50)'
                            : '#fff',
                        },
                      ]}>
                      {t('Save')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </GroupFieldTag>
            <GroupFieldTag
              width={wp('70%')}
              title={t('Black Water')}
              languageScreen
              props={props}
              rightBorderWidth={wp('43.5%')}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    width: '45%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    borderRightWidth: 2,
                    marginRight: wp('2%'),
                    borderColor: props?.ColorReducer?.secondary,
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {t('Reserve')}
                      {' >'}
                    </Text>
                  </View>
                  <View style={{marginLeft: wp('1%')}}>
                    <SettingGroupbyTextInput
                      backgroundColor={
                        props?.ColorReducer?.isDarkThemeOn ? '#631818' : 'white'
                      }
                      title={t('Reserve')}
                      onChangeText={text => setblackwaterreserve(text)}
                      value={blackwaterreserve}
                    />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {'%'}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '15%',
                      borderRadius: 8,
                      height: '100%',
                      backgroundColor: 'red',
                      marginLeft: wp('2%'),
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '50%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: hp('2.5%'),
                          color: props?.ColorReducer?.light,
                          fontFamily: 'OpenSans-ExtraBold',
                        }}>
                        {t('Low')}
                        {' >'}
                      </Text>
                    </View>
                    <View
                      style={{marginLeft: wp('1%'), justifyContent: 'center'}}>
                      <SettingGroupbyTextInput
                        backgroundColor={
                          props?.ColorReducer?.isDarkThemeOn
                            ? '#631818'
                            : 'white'
                        }
                        title={t('Low')}
                        onChangeText={text => setblackwaterlow(text)}
                        value={blackwaterlow}
                      />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: hp('2.5%'),
                          color: props?.ColorReducer?.light,
                          fontFamily: 'OpenSans-ExtraBold',
                        }}>
                        {'%'}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '18%',
                        borderRadius: 8,
                        height: '100%',
                        backgroundColor: '#F8E81E',
                        marginLeft: wp('2%'),
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      if (freshwaterlow != null && freshwaterreserve != null) {
                        props?.statusColorStatus(
                          CHNAGE_BLACKWATER_COLOR_SCALE,
                          blackwaterlow,
                          blackwaterreserve,
                        );
                      }
                    }}
                    style={[
                      styles.btn,
                      {
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? '#rgba(255,0,0,0.30)'
                          : '#000',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.btntext,
                        {
                          color: props?.ColorReducer?.isDarkThemeOn
                            ? 'rgba(255,0,0,0.50)'
                            : '#fff',
                        },
                      ]}>
                      {t('Save')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </GroupFieldTag>
            <GroupFieldTag
              width={wp('70%')}
              title={t('Diesel')}
              props={props}
              rightBorderWidth={wp('51.5%')}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    width: '45%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                    marginRight: wp('2%'),
                    justifyContent: 'center',
                    borderRightWidth: 2,
                    borderColor: props?.ColorReducer?.secondary,
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {t('Reserve')}
                      {' <'}
                    </Text>
                  </View>
                  <View style={{marginLeft: wp('1%')}}>
                    <SettingGroupbyTextInput
                      backgroundColor={
                        props?.ColorReducer?.isDarkThemeOn ? '#631818' : 'white'
                      }
                      title={t('Reserve')}
                      onChangeText={text => setdieselwaterreserve(text)}
                      value={dieselwaterreserve}
                    />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: props?.ColorReducer?.light,
                        fontFamily: 'OpenSans-ExtraBold',
                      }}>
                      {'%'}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '15%',
                      borderRadius: 8,
                      height: '100%',
                      backgroundColor: 'red',
                      marginLeft: wp('2%'),
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '50%',
                    marginTop: hp('2%'),
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: hp('2.5%'),
                          color: props?.ColorReducer?.light,
                          fontFamily: 'OpenSans-ExtraBold',
                        }}>
                        {t('Low')}
                        {' <'}
                      </Text>
                    </View>
                    <View
                      style={{marginLeft: wp('1%'), justifyContent: 'center'}}>
                      <SettingGroupbyTextInput
                        backgroundColor={
                          props?.ColorReducer?.isDarkThemeOn
                            ? '#631818'
                            : 'white'
                        }
                        title={t('Low')}
                        onChangeText={text => setdieselwaterlow(text)}
                        value={dieselwaterlow}
                      />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: hp('2.5%'),
                          color: props?.ColorReducer?.light,
                          fontFamily: 'OpenSans-ExtraBold',
                        }}>
                        {'%'}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '18%',
                        borderRadius: 8,
                        height: '100%',
                        backgroundColor: '#F8E81E',
                        marginLeft: wp('2%'),
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      if (freshwaterlow != null && freshwaterreserve != null) {
                        props?.statusColorStatus(
                          CHNAGE_DIESEL_COLOR_SCALE,
                          dieselwaterlow,
                          dieselwaterreserve,
                        );
                      }
                    }}
                    style={[
                      styles.btn,
                      {
                        backgroundColor: props?.ColorReducer?.isDarkThemeOn
                          ? '#rgba(255,0,0,0.30)'
                          : '#000',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.btntext,
                        {
                          color: props?.ColorReducer?.isDarkThemeOn
                            ? 'rgba(255,0,0,0.50)'
                            : '#fff',
                        },
                      ]}>
                      {t('Save')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </GroupFieldTag>
          </GroupFieldTag>
        </ScrollView>
      </Container>
    </GestureRecognizer>
  );
}

const mapStateToProps = ({WaterDieselEvent, ColorReducer}) => ({
  WaterDieselEvent,
  ColorReducer,
});

export default connect(mapStateToProps, {
  statusColorStatus,
})(Setting);

const styles = StyleSheet.create({
  input: {
    height: Dimensions.get('screen').height / 10,
    width: wp('70%'),
    marginTop: hp('1.5%'),
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    fontSize: 32,
    borderRadius: 10,
    backgroundcolor: '#fff',
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  btn: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: wp('2%'),
    marginLeft: wp('2%'),
  },
  btntext: {
    fontSize: hp('2.5%'),
    fontFamily: 'OpenSans-ExtraBold',
    textAlign: 'center',
  },
});
