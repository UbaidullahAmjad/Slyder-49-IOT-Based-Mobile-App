import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MOB from '../../../Component/MOB';
import AppLogo from '../../../Component/SharedComponent/AppLogo';
import Container from '../../../Component/SharedComponent/Container';
import store from '../../../Store';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';
import {MobBtn} from '../../../Store/Actions/SharedAction';
import GoodByeSection from './Component/GoodByeSection';
import WelcomeSection from './Component/WelcomeSection';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const mob = () => store.dispatch(MobBtn('True', 'slyderapp;welcome;mob;mob'));
const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

export default function WelcomeScreen(props) {
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
        props.navigation.navigate('Status');
        store.dispatch(ChangedScreen('status'));
        break;
      case SWIPE_RIGHT:
        console.log('SWIPE_RIGHT');
        break;
    }
  };

  // React.useEffect(() => {
  //   const unsubscribe = props?.navigation.addListener('tabPress', e => {
  //     // Prevent default behavior
  //     // e.preventDefault();
  //     store.dispatch(ChangedScreen('welcome'));
  //     // Do something manually
  //     // ...
  //   });

  //   return unsubscribe;
  // }, [props?.navigation]);

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      config={config}
      style={{
        flex: 1,
      }}>
      <Container containerStyle={{paddingVertical: '2%'}}>
        {/* <SwipeNavbar /> */}
        <MOB onPress={mob} title="MOB" notdisable={false} />
        <AppLogo />
        <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
          <ScrollView horizontal={true} style={{width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                width: widthPercentageToDP('100%'),
                height: heightPercentageToDP('78%'),
              }}>
              <WelcomeSection />
              <GoodByeSection />
            </View>
          </ScrollView>
        </ScrollView>
      </Container>
    </GestureRecognizer>
  );
}
