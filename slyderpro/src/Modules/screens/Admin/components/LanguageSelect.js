import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StackActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalizationContext from '../../../../../LocalizationContext';
import {connect} from 'react-redux';
import Container from '../../../../Component/SharedComponent/Container';
import GroupFieldTag from '../../../../Component/GroupFieldTag';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ChangedScreen} from '../../../../Store/Actions/ScreenStatusAction';
import store from '../../../../Store';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function LanguageSelect(props) {
  const {t} = React.useContext(LocalizationContext);
  const {locale, setLocale} = React.useContext(LocalizationContext);

  const data = [
    {id: 1, languageName: t('English'), lanType: 'en'},
    {id: 2, languageName: t('German'), lanType: 'gr'},
    {id: 3, languageName: t('French'), lanType: 'fr'},
  ];

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
        <GroupFieldTag
          width={wp('80%')}
          languageScreen
          title={t('Select Language')}
          props={props}
          rightBorderWidth={wp('53.55%')}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            contentContainerStyle={{marginTop: hp('5%')}}
            renderItem={({item, index}) => {
              const active = props?.ColorReducer?.statusColor?.active;
              const unactive = props?.ColorReducer?.statusColor?.unactive;
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={async () => {
                    setLocale(item?.lanType);
                    await AsyncStorage.setItem('@language', item?.lanType);
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: wp('3%'),
                  }}>
                  <View
                    style={{
                      width: wp('10%'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <LinearGradient
                      colors={locale == item.lanType ? active : unactive}
                      useAngle={true}
                      angle={145}
                      angleCenter={{x: 0.7, y: 0.5}}
                      borderRadius={100}
                      style={{
                        height: hp('4%'),
                        width: hp('4%'),
                        borderWidth: 2,
                        borderColor: '#242424',
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      color: props?.ColorReducer?.light,
                      width: wp('15%'),
                      fontSize: hp('5%'),
                    }}>
                    {item.languageName}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </GroupFieldTag>
      </Container>
    </GestureRecognizer>
  );
}
const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(LanguageSelect);
