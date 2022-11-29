import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {ConnectMqtt} from '../../../../Store/Actions/MqttAction';
import {DisconnectMqtt} from '../../../../Store/Actions/MqttAction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Neomorph} from 'react-native-neomorph-shadows';
import Blinking from '../../../../Component/Blinking';
import LocalizationContext from '../../../../../LocalizationContext';
import Container from '../../../../Component/SharedComponent/Container';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../../Store/Actions/ScreenStatusAction';
import store from '../../../../Store';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function Setup(props) {
  const {t} = React.useContext(LocalizationContext);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('.');
  const [items, setItems] = useState([
    {label: ',', value: ','},
    {label: '.', value: '.'},
  ]);

  React.useEffect(() => {
    const unsubscribe = props?.navigation.addListener('blur', () => {
      props?.navigation.dispatch(StackActions.pop());
    });

    return unsubscribe;
  }, [props?.navigation]);

  const [ip, setIP] = useState('canmatic.de');
  const [port, setPort] = useState(1884);
  const [title, setTitle] = useState('boat/control');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [indicator, setindicator] = useState(new Animated.Value(0));
  const [wholeHeight, setwholeHeight] = useState(1);
  const [visibleHeight, setvisibleHeight] = useState(0);
  const indicatorSize =
    wholeHeight > visibleHeight
      ? (visibleHeight * visibleHeight) / wholeHeight
      : visibleHeight;
  const difference =
    visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1;

  const fetchAsyncData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MQTT');
      if (value != null) {
        const data = JSON.parse(value);
        setIP(data.ip);
        setPort(data.port);
        setTitle(data.title);
        setUsername(data.username);
        setPassword(data.password);
        // setValue(data.decimalformat)
      }
    } catch (error) {
      // ToastAndroid.show(`${error}`, ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    fetchAsyncData();
  }, []);

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

  const onConnect = async () => {
    let ConnectionString = t('Connection Successful!');
    let ConnectionFailedString = t('Connection Lost! Kindly Connect it Again');

    if (props?.Mqtt?.client != null) {
      props?.DisconnectMqtt();
    } else {
      let user = {
        ip: ip,
        port: port,
        title: title,
        username: username,
        password: password,
      };

      if (ip != '' && port != '' && title != '') {
        await AsyncStorage.setItem('@MQTT', JSON.stringify(user));
        // props.ConnectMqtt(ip, port, title, false, value, ConnectionString, ConnectionFailedString)
        props.ConnectMqtt(
          ip,
          port,
          title,
          false,
          ConnectionString,
          ConnectionFailedString,
        );
      } else {
        ToastAndroid.show(t(`MQTT Error`), ToastAndroid.LONG);
      }
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
        <StatusBar hidden />
        <TouchableOpacity
          onPress={() => props?.navigation.goBack()}
          style={{
            marginTop: hp('3%'),
            marginLeft: wp('10%'),
          }}>
          <AntDesign
            name="arrowleft"
            color={props?.ColorReducer?.light}
            size={40}
          />
        </TouchableOpacity>

        <Neomorph
          inner // <- enable inner shadow
          darkShadowColor="#141414" // <- set this
          lightShadowColor="#474747"
          style={{
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 1,
            shadowColor: '#fff',
            shadowRadius: 3,
            backgroundColor: '#141414',
            borderColor: '#A4A4A4',
            borderWidth: 0,
            width: (1.5 / 100) * wp('60%'),
            height: hp('92.5%'),
            borderRadius: 20,
            overflow: 'visible',
            position: 'absolute',
            right: 10,
            top: hp('6%'),
            // paddingBottom: 34,
            // ...include most of View/Layout styles
          }}></Neomorph>

        <ScrollView
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(width, height) => {
            setwholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => setvisibleHeight(height)}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: indicator}}}],
            {useNativeDriver: false},
          )}
          contentContainerStyle={{flexGrow: 1}}>
          <KeyboardAvoidingView
            style={[
              styles.container,
              {
                borderWidth: 1,
                borderColor: props?.ColorReducer?.light,
                borderRadius: wp('1%'),
                padding: hp('2%'),
                width: wp('80%'),
                alignSelf: 'center',
                marginTop: hp('7%'),
                marginBottom: hp('5%'),
              },
            ]}>
            <LinearGradient
              colors={
                props?.ColorReducer?.isDarkThemeOn
                  ? ['#161617', '#171819', '#191A1B']
                  : ['#272C2E', '#2A2E31', '#2A2E31']
              }
              style={{
                width: '15%',
                marginLeft: wp('2%'),
                marginTop: -hp('6.5%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('6%'),
                  color: props?.ColorReducer?.light,
                  fontFamily: 'OpenSans-ExtraBold',
                  textAlign: 'center',
                }}>
                MPE
              </Text>
            </LinearGradient>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: props?.ColorReducer?.light,
                  fontSize: hp('4%'),
                  width: '23%',
                }}>
                {t('Server')}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.20)'
                      : 'white',
                  },
                ]}
                value={ip}
                onChangeText={txt => setIP(txt)}
                placeholder={t('Server')}
              />
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
                  fontSize: hp('4%'),
                  width: '23%',
                }}>
                {t('Port')}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.20)'
                      : 'white',
                  },
                ]}
                value={port.toString()}
                onChangeText={txt => setPort(txt)}
                placeholder={t('Port')}
                keyboardType="numeric"
              />
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
                  fontSize: hp('4%'),
                  width: '23%',
                }}>
                {t('Subscribe')}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.20)'
                      : 'white',
                  },
                ]}
                value={title}
                onChangeText={txt => setTitle(txt)}
                placeholder={t('Subscribe')}
              />
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
                  fontSize: hp('4%'),
                  width: '23%',
                }}>
                {t('Publish')}
              </Text>
              <TextInput
                editable={false}
                style={[
                  styles.input,
                  {
                    backgroundColor: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.20)'
                      : 'white',
                  },
                ]}
                // value={title}
                // onChangeText={(txt) => setTitle(txt)}
                placeholder="boat/cmd"
              />
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
                  fontSize: hp('4%'),
                  width: '23%',
                }}>
                {t('Username')}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.20)'
                      : 'white',
                  },
                ]}
                placeholder={t('Username')}
                value={username}
                onChangeText={txt => setUsername(txt)}
              />
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
                  fontSize: hp('4%'),
                  width: '23%',
                }}>
                {t('Password')}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.20)'
                      : 'white',
                  },
                ]}
                secureTextEntry
                placeholder={t('Password')}
                value={password}
                onChangeText={txt => setPassword(txt)}
              />
            </View>

            {/* <View style={{ flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center" }}>
                            <Text style={{ color:props?.ColorReducer?.light, fontSize: hp('4%'), width: '20%' }}>Decimal Format</Text>
                            <View>
                                <DropDownPicker
                                    placeholder={'Select Decimal Format'}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    onChangeValue={(item) => {
                                        setValue(item)
                                    }}
                                    textStyle={{
                                        color: 'black',
                                        fontSize: hp('3.2%'),
                                    }}
                                    dropDownContainerStyle={{
                                        height: Dimensions.get('screen').height / 9,
                                        width: Dimensions.get('screen').width / 2,
                                    }}
                                    dropDownDirection='DEFAULT'
                                    style={{
                                        marginVertical: hp('1%'),
                                        height: Dimensions.get('screen').height / 10,
                                        width: Dimensions.get('screen').width / 2,
                                    }}
                                    listMode="SCROLLVIEW"
                                    scrollViewProps={{
                                        nestedScrollEnabled: true,
                                    }}
                                />
                            </View>
                        </View> */}

            <TouchableOpacity
              onPress={() => onConnect()}
              activeOpacity={0.7}
              style={{
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                width: Dimensions.get('screen').width / 1.4,
                height: Dimensions.get('screen').height / 10,
                backgroundColor: props?.ColorReducer?.isDarkThemeOn
                  ? '#rgba(255,0,0,0.30)'
                  : '#000',
                elevation: 10,
                padding: 20,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: hp('4%'),
                  color: props?.ColorReducer?.isDarkThemeOn
                    ? 'rgba(255,0,0,0.60)'
                    : '#fff',
                  fontFamily: 'OpenSans-Bold',
                }}>
                {props?.Mqtt?.client == null ? t('Connect') : t('Disconnect')}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: hp('3%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp('4%'),
              }}>
              <Blinking />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

        <Animated.View
          style={[
            styles.indicator,
            {
              height: indicatorSize,
              backgroundColor: props?.ColorReducer?.scrollviewColor,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    visibleHeight / wholeHeight,
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
      </Container>
    </GestureRecognizer>
  );
}

const mapStateToProps = ({
  Mqtt,
  ColorReducer,
  //  HeartbeatReducer
}) => ({
  Mqtt,
  // HeartbeatReducer,
  ColorReducer,
});

export default connect(mapStateToProps, {
  ConnectMqtt,
  DisconnectMqtt,
})(Setup);

const styles = StyleSheet.create({
  input: {
    height: Dimensions.get('screen').height / 10,
    width: Dimensions.get('screen').width / 2,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    fontSize: 32,
    borderRadius: 10,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
    borderWidth: 0,
  },
  container: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    width: (1.4 / 100) * wp('60%'),
    top: hp('6%'),
    right: 10,
    borderRadius: 50,
  },
});
