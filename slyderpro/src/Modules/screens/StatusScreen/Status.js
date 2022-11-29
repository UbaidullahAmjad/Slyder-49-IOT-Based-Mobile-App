import React from 'react';
import {View} from 'react-native';
import MOB from '../../../Component/MOB';
import Container from '../../../Component/SharedComponent/Container';
import store from '../../../Store';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import EventAndTotalLog from './Components/EventAndTotalLog';
import GeneratorAndPower from './Components/GeneratorAndPower';
import WaterandDieselScale from './Components/WaterandDieselScale';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

export default function Status(props) {
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
        props.navigation.navigate('Electric');
        store.dispatch(ChangedScreen('electric'));
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Welcome');
        store.dispatch(ChangedScreen('welcome'));
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
        <MOB
          onPress={() =>
            store.dispatch(MobBtn('True', 'slyderapp;status;mob;mob'))
          }
          title="MOB"
          notdisable={false}
        />
        <EventAndTotalLog />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <WaterandDieselScale />
          <GeneratorAndPower />
        </View>
      </Container>
    </GestureRecognizer>
  );
}
