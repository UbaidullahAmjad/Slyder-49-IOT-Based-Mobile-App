import React from 'react';
import {
  Dimensions, View
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LowerandupperDeckstatusText from '../../../Component/LowerandupperDeckstatusText';
import Container from '../../../Component/SharedComponent/Container';
import LowerDeckBackgroundImage from './Components/LowerDeck/LowerDeckBackgroundImage';
import LowerDeckLeft from './Components/LowerDeck/LowerDeckLeft';
import LowerDeckLeftstatusOnImage from './Components/LowerDeck/LowerDeckLeftstatusOnImage';
import LowerDeckRight from './Components/LowerDeck/LowerDeckRight';
import LowerDeckRightStatisOnImage from './Components/LowerDeck/LowerDeckRightStatisOnImage';
import LowerDeckSwitches from './Components/LowerDeck/LowerDeckSwitches';
export default function Main(props) {
  return (
    <Container>
      <View style={{ width: widthPercentageToDP('100%'), height: heightPercentageToDP('100%') }}>
        <View style={{ position: "absolute", top: heightPercentageToDP('12%'), right: widthPercentageToDP('19%') }}>
          <LowerandupperDeckstatusText screen='lower' onPress={props?.onPress} />
        </View>
        <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, flexDirection: 'row', flex: 1 }}>
          <View style={{ flexDirection: 'row', width: '65%', height: Dimensions.get('screen').height, }}>
            <LowerDeckLeft />
            <LowerDeckBackgroundImage>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <LowerDeckLeftstatusOnImage />
                <LowerDeckRightStatisOnImage />
              </View>
            </LowerDeckBackgroundImage>
            <LowerDeckRight navigation={props.navigation} />
          </View>
          <LowerDeckSwitches />
        </View>
      </View>
    </Container>
  );
}
