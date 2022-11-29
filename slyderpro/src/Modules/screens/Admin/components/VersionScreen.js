import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StackActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalizationContext from '../../../../../LocalizationContext';
import {connect} from 'react-redux';
import VersionInfo from 'react-native-version-info';
import GroupFieldTag from '../../../../Component/GroupFieldTag';
import Container from '../../../../Component/SharedComponent/Container';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../../Store/Actions/ScreenStatusAction';
import store from '../../../../Store';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const url = 'https://www.gmm-yacht.de';

function VersionScreen(props) {
  console.log(VersionInfo.appVersion);
  console.log(VersionInfo.buildVersion);
  console.log(VersionInfo.bundleIdentifier);

  const {t} = React.useContext(LocalizationContext);

  React.useEffect(() => {
    const unsubscribe = props?.navigation.addListener('blur', () => {
      props?.navigation.dispatch(StackActions.pop(1));
    });
    return unsubscribe;
  }, [props?.navigation]);

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    try {
      await Linking.openURL(url);
    } catch (error) {
      ToastAndroid.show(
        `${t(`The URL is not working properly:`)} ${url}`,
        ToastAndroid.LONG,
      );
    }
  }, [url]);

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
        <TouchableOpacity
          onPress={() => props?.navigation.goBack()}
          style={{
            marginTop: hp('5%'),
            marginLeft: wp('10%'),
          }}>
          <AntDesign
            name="arrowleft"
            color={props?.ColorReducer?.light}
            size={40}
          />
        </TouchableOpacity>

        <GroupFieldTag
          width={wp('80%')}
          languageScreen
          title={t('Version')}
          props={props}
          rightBorderWidth={wp('53.55%')}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: props?.ColorReducer?.light,
                  fontSize: hp('4%'),
                  marginTop: hp('3%'),
                }}>
                {t('App Version')}: 1.3.0
              </Text>
              <Text
                style={{
                  color: props?.ColorReducer?.light,
                  fontSize: hp('4%'),
                  marginTop: hp('3%'),
                }}>
                {t('Ⓒ Global Maritime Management GmbH - All Rights Reserved')}
              </Text>
              <Text
                style={{
                  width: hp('30%'),
                  color: 'black',
                  borderRadius: 20,
                  padding: 10,
                  marginTop: hp('3%'),
                  fontSize: hp('3%'),
                  backgroundColor: props?.ColorReducer?.isDarkThemeOn
                    ? '#631818'
                    : 'white',
                }}
                onPress={() => handlePress()}>
                www.gmm-yacht.de
              </Text>
            </View>
          </View>
        </GroupFieldTag>
      </Container>
    </GestureRecognizer>
  );
}

const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(VersionScreen);
