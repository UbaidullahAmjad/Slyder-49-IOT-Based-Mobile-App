import React from 'react';
import {Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MOB from '../../../Component/MOB';
import Container from '../../../Component/SharedComponent/Container';
import store from '../../../Store';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import WeatherDataRightSIde from './Layouts/WeatherDataRightSIde';
import WeatherLeftSide from './Layouts/WeatherLeftSide';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const mob = () =>
  store.dispatch(MobBtn('True', 'slyderapp;weather_data;mob;mob'));

export default function MainScr(props) {
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
        props.navigation.navigate('Admin');
        store.dispatch(ChangedScreen('admin'));
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Sailing');
        store.dispatch(ChangedScreen('sailing'));
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
      <Container weatherslider>
        <View
          style={{
            zIndex: 1,
            backgroundColor: 'red',
            width: Dimensions.get('screen').width,
            // marginRight: 24
          }}>
          <MOB onPress={mob} title="MOB" notdisable={false} />
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              width: wp('100%'), // 80% of width device screen
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: (58 / 100) * Dimensions.get('screen').width,
                height: heightPercentageToDP('100%'),
              }}>
              <WeatherLeftSide />
            </View>
            <View
              style={{
                width: (42 / 100) * Dimensions.get('screen').width,
                height: heightPercentageToDP('100%'),
              }}>
              <WeatherDataRightSIde />
            </View>
          </View>
        </ScrollView>
      </Container>
    </GestureRecognizer>
  );
}
