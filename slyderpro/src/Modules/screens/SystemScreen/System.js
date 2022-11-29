import React from 'react';
import {Dimensions, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LowerandupperDeckstatusText from '../../../Component/LowerandupperDeckstatusText';
import Container from '../../../Component/SharedComponent/Container';
import UppderDeckRightStatusOnImage from './Components/UpperDeck/UppderDeckRightStatusOnImage';
import UpperdeckBackgroundImage from './Components/UpperDeck/UpperdeckBackgroundImage';
import UpperDeckLeft from './Components/UpperDeck/UpperDeckLeft';
import UpperDeckLeftStatusOnImage from './Components/UpperDeck/UpperDeckLeftStatusOnImage';
import UpperDeckRight from './Components/UpperDeck/UpperDeckRight';
import UpperDeckSwitches from './Components/UpperDeck/UpperDeckSwitches';

export default function Main(props) {
  return (
    <Container>
      <View
        style={{
          position: 'absolute',
          top: heightPercentageToDP('12%'),
          right: widthPercentageToDP('20.5%'),
        }}>
        <LowerandupperDeckstatusText screen="upper" onPress={props?.onPress} />
      </View>
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          flexDirection: 'row',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '65%',
            height: Dimensions.get('screen').height,
          }}>
          <UpperDeckLeft />
          <UpperdeckBackgroundImage>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <UpperDeckLeftStatusOnImage />
              <UppderDeckRightStatusOnImage />
            </View>
          </UpperdeckBackgroundImage>
          <UpperDeckRight />
        </View>
        <UpperDeckSwitches />
      </View>
    </Container>
  );
}
