import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StackActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalizationContext from '../../../../LocalizationContext';
import {connect} from 'react-redux';
import Container from '../../../Component/SharedComponent/Container';
import GroupFieldTag from '../../../Component/GroupFieldTag';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../Store/Actions/ScreenStatusAction';
import store from '../../../Store';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function VersionScreen(props) {
  const {t} = React.useContext(LocalizationContext);

  React.useEffect(() => {
    const unsubscribe = props?.navigation.addListener('blur', () => {
      props?.navigation.dispatch(StackActions.pop(1));
    });

    return unsubscribe;
  }, [props?.navigation]);

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

        <ScrollView>
          <GroupFieldTag
            width={wp('80%')}
            languageScreen
            title={t('Password')}
            props={props}
            rightBorderWidth={wp('53.55%')}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{marginTop: hp('4%')}}>
                <Text
                  style={{
                    color: props?.ColorReducer?.light,
                    fontSize: hp('4%'),
                    width: '20%',
                  }}>
                  {t('Old Password')}
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: props?.ColorReducer?.isDarkThemeOn
                        ? 'rgba(255,0,0,0.20)'
                        : 'white',
                    },
                  ]}
                  placeholder={t('Old Password')}
                />
              </View>
              <View style={{marginTop: hp('4%')}}>
                <Text
                  style={{
                    color: props?.ColorReducer?.light,
                    fontSize: hp('4%'),
                    width: '20%',
                  }}>
                  {t('New Password')}
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: props?.ColorReducer?.isDarkThemeOn
                        ? 'rgba(255,0,0,0.20)'
                        : 'white',
                    },
                  ]}
                  placeholder={t('New Password')}
                />
              </View>
              <View style={{marginTop: hp('4%')}}>
                <Text
                  style={{
                    color: props?.ColorReducer?.light,
                    fontSize: hp('4%'),
                    width: '20%',
                  }}>
                  {t('Confirm Password')}
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: props?.ColorReducer?.isDarkThemeOn
                        ? 'rgba(255,0,0,0.20)'
                        : 'white',
                    },
                  ]}
                  placeholder={t('Confirm Password')}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  height: Dimensions.get('screen').height / 10,
                  width: wp('70%'),
                  marginTop: hp('6%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: props?.ColorReducer?.isDarkThemeOn
                    ? '#rgba(255,0,0,0.30)'
                    : '#000',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: hp('4%'),
                    color: props?.ColorReducer?.isDarkThemeOn
                      ? 'rgba(255,0,0,0.40)'
                      : '#fff',
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  {t('Update Password')}
                </Text>
              </TouchableOpacity>
            </View>
          </GroupFieldTag>
        </ScrollView>
      </Container>
    </GestureRecognizer>
  );
}

const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(VersionScreen);

const styles = StyleSheet.create({
  input: {
    height: Dimensions.get('screen').height / 10,
    width: wp('70%'),
    marginTop: hp('1.5%'),
    // borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    fontSize: 32,
    borderRadius: 10,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
});
