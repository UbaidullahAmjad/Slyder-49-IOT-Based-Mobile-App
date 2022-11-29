import React from 'react';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MOB from '../../../Component/MOB';
import Container from '../../../Component/SharedComponent/Container';
import store from '../../../Store';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import CenteredView from './components/CenteredView';
import LeftSideMenu from './components/LeftSideMenu';
import RightSideMenu from './components/RightSideMenu';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const mob = () => store.dispatch(MobBtn('True', 'slyderapp;sailing;mob;mob'));

export default function Sailing(props) {
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
        props.navigation.navigate('Weather Data');
        store.dispatch(ChangedScreen('weather'));
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Under Engine');
        store.dispatch(ChangedScreen('underengine'));
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
      <Container style={{flex: 1}}>
        <MOB onPress={mob} title="MOB" notdisable={false} />
        <View
          style={{
            width: wp('100%'),
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '31%', marginBottom: hp('4%')}}>
            <LeftSideMenu />
          </View>
          <View style={{width: '38%', height: '100%', marginBottom: hp('4%')}}>
            <CenteredView />
          </View>
          <View style={{width: '31%', height: '100%', marginBottom: hp('4%')}}>
            <RightSideMenu />
          </View>
        </View>
      </Container>
    </GestureRecognizer>
  );
}
