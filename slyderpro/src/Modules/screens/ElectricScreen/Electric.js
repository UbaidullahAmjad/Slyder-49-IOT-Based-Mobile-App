import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import MOB from '../../../Component/MOB';
import Container from '../../../Component/SharedComponent/Container';
import store from '../../../Store';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import {DARK_ELECTRIC_IMAGE, ELECTRIC_IMAGE} from '../../ExportAllImages/index';
import BottomLayoutElectric from './Component/BottomLayoutElectric';
import CenterLayoutElectric from './Component/CenterLayoutElectric';
import TopLayoutElectric from './Component/TopLayoutElectric';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const mob = () => store.dispatch(MobBtn('True', 'slyderapp;electric;mob;mob'));
const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function Electric(props) {
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
        props.navigation.navigate('Systems');
        store.dispatch(ChangedScreen('system'));
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Status');
        store.dispatch(ChangedScreen('status'));
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
        <ImageBackground
          source={
            props?.ColorReducer?.isDarkThemeOn
              ? DARK_ELECTRIC_IMAGE
              : ELECTRIC_IMAGE
          }
          resizeMode="stretch"
          style={{
            flex: 1,
            backgroundColor: '#262A2D',
          }}>
          <StatusBar hidden />
          <MOB onPress={mob} title="MOB" notdisable={false} />
          <View style={{width: '100%', height: '37%'}}>
            <TopLayoutElectric />
          </View>
          <View style={{width: '100%', height: '33.33%'}}>
            <CenterLayoutElectric />
          </View>
          <View style={{flex: 1}}>
            <BottomLayoutElectric />
          </View>
        </ImageBackground>
      </Container>
    </GestureRecognizer>
  );
}

const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(Electric);
