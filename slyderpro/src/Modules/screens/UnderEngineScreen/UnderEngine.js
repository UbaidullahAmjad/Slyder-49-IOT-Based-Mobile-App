import React from 'react';
import {View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MOB from '../../../Component/MOB';
import Container from '../../../Component/SharedComponent/Container';
import store from '../../../Store';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import EngineBBController from './Component/EngineBBController';
import UnderEngineCenter from './Component/UnderEngineCenter';
import UnderEngineLeft from './Component/UnderEngineLeft';
import UnderEngineRight from './Component/UnderEngineRight';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const mob = () =>
  store.dispatch(MobBtn('True', 'slyderapp;UnderEngine;mob;mob'));

export default function UnderEngine(props) {
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
        props.navigation.navigate('Sailing');
        store.dispatch(ChangedScreen('sailing'));
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Systems');
        store.dispatch(ChangedScreen('system'));
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
        <MOB onPress={mob} title="MOB" notdisable={false} />
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{width: '31%', height: '100%', marginBottom: hp('4%')}}>
            <UnderEngineLeft navigation={props.navigation} />
          </View>
          <View style={{width: '38%', height: '100%', marginBottom: hp('4%')}}>
            <UnderEngineCenter navigation={props.navigation} />
          </View>
          <View style={{width: '31%', height: '100%', marginBottom: hp('4%')}}>
            <UnderEngineRight navigation={props.navigation} />
          </View>
          <EngineBBController />
        </View>
      </Container>
    </GestureRecognizer>
  );
}
