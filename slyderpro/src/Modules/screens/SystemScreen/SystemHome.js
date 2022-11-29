import React, {useRef} from 'react';
import {ScrollView, View, Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import UpperDeck from './System';
import SystemMain from './SystemMain';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';
import store from '../../../Store';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

export default function SystemHome(props) {
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
        props.navigation.navigate('Under Engine');
        store.dispatch(ChangedScreen('underengine'));
        break;
      case SWIPE_RIGHT:
        props.navigation.navigate('Electric');
        store.dispatch(ChangedScreen('electric'));
        break;
    }
  };

  const ScrollViewRef = useRef();
  React.useEffect(() => {
    const unsubscribe = props?.navigation.addListener('blur', () => {
      ScrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
    });
    return unsubscribe;
  }, [props?.navigation]);
  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      config={config}
      style={{
        flex: 1,
      }}>
      <ScrollView
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        ref={ScrollViewRef}
        contentContainerStyle={{flexGrow: 1, flexWrap: 'wrap'}}>
        <View
          style={{
            width: widthPercentageToDP('100%'),
            height:
              Dimensions.get('screen').height - heightPercentageToDP('6%'),
          }}>
          <SystemMain
            navigation={props?.navigation}
            onPress={() => ScrollViewRef.current.scrollToEnd({animated: true})}
          />
        </View>
        <View
          style={{
            width: widthPercentageToDP('100%'),
            height:
              Dimensions.get('screen').height - heightPercentageToDP('6%'),
          }}>
          <UpperDeck
            navigation={props?.navigation}
            onPress={() =>
              ScrollViewRef.current.scrollTo({x: 0, y: 0, animated: true})
            }
          />
        </View>
      </ScrollView>
    </GestureRecognizer>
  );
}
