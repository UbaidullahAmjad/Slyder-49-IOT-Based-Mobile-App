import React from 'react';
import {
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import MOB from '../../../Component/MOB';
import store from '../../../Store';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import LocalizationContext from './../../../../LocalizationContext';
import Container from '../../../Component/SharedComponent/Container';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const mob = () => store.dispatch(MobBtn('True', 'slyderapp;admin;mob;mob'));

function Admin(props) {
  const {t} = React.useContext(LocalizationContext);
  const Buttons = [
    {
      title: t('VERSION'),
      onPress: () => props.navigation.navigate('versionscreen'),
    },
    {
      title: t('PASSWORD'),
      onPress: () => props.navigation.navigate('Passwort'),
    },
    {
      title: t('TIMEZONE'),
      onPress: () => AndroidOpenSettings.dateSettings(),
    },
    {
      title: t('LANGUAGE'),
      onPress: () => props.navigation.navigate('LanguageSelect'),
    },
    {
      title: t('LOG DATA'),
      onPress: () => console.log('Logen Daten'),
    },
    {
      title: t('SETTINGS'),
      onPress: () => props.navigation.navigate('Setting'),
    },
    {
      title: t('SET UP'),
      onPress: () => props.navigation.navigate('Setup'),
    },
  ];

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
        <StatusBar hidden />
        <MOB onPress={mob} title="MOB" notdisable={false} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginLeft: widthPercentageToDP('5%'),
          }}>
          {Buttons.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={item?.onPress}
                key={index}
                style={{
                  width: '16%',
                  borderWidth: 4,
                  borderColor: props?.ColorReducer?.light,
                  height: Dimensions.get('screen').width / 24,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: index == 0 ? 0 : '2%',
                }}>
                <Text
                  style={{
                    fontSize: hp('2.8%'),
                    color: props?.ColorReducer?.light,
                    fontFamily: 'OpenSans-ExtraBold',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Container>
    </GestureRecognizer>
  );
}
const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(Admin);
