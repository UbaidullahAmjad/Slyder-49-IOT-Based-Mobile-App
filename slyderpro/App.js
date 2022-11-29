import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LocalizationContext from './LocalizationContext';
import Admin1 from './src/Modules/screens/Admin/Admin';
import LanguageSelect from './src/Modules/screens/Admin/components/LanguageSelect';
import Setup from './src/Modules/screens/Admin/components/Setup';
import VersionScreen from './src/Modules/screens/Admin/components/VersionScreen';
import Passwort from './src/Modules/screens/Admin/Passwort';
import Setting from './src/Modules/screens/Admin/Setting';
import Electric from './src/Modules/screens/ElectricScreen/Electric';
import SallingScreen from './src/Modules/screens/SailingScreen/SailingScreen';
import Status from './src/Modules/screens/StatusScreen/Status';
import SystemHome from './src/Modules/screens/SystemScreen/SystemHome';
import UnderEngine from './src/Modules/screens/UnderEngineScreen/UnderEngine';
import WeatherData from './src/Modules/screens/WeatherData/WeatherData';
import WelcomeScreen from './src/Modules/screens/WelcomeScreen/WelcomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {connect} from 'react-redux';
import store from './src/Store';
import {ChangedScreen} from './src/Store/Actions/ScreenStatusAction';
// const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SystemStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SystemsMain" component={SystemHome} />
    </Stack.Navigator>
  );
}

function AdminStack() {
  return (
    <Stack.Navigator
      initialRouteName="Admins"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Admins" component={Admin1} />
      <Stack.Screen name="Setup" component={Setup} />
      <Stack.Screen name="versionscreen" component={VersionScreen} />
      <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
      <Stack.Screen name="Passwort" component={Passwort} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

function App(props) {
  const {t} = React.useContext(LocalizationContext);
  return (
    <NavigationContainer>
      {/* https://github.com/react-navigation/react-navigation/issues/8273 to disable animation edit the PagerViewAdapter.tsx */}
      <Tab.Navigator
        optimizationsEnabled={true}
        timingConfig={{
          duration: 0, // will disable the animation
        }}
        // screenListeners={{tabPress: e => console.log('TAPPED: ', e)}}
        screenOptions={({route, navigation}) => ({
          tabBarStyle: {
            backgroundColor: props?.ColorReducer?.mainColor,
            height: hp('6%'),
            borderTopColor: '#4B4B4B',
          },
          tabBarIconStyle: {display: 'none'},

          tabBarLabel: ({focused}) => {
            const active = props?.ColorReducer?.statusColor?.active;
            const unactive = props?.ColorReducer?.statusColor?.unactive;
            return (
              <View
                style={{
                  alignItems: 'center',
                  width: widthPercentageToDP('15%'),
                  height: hp('6%'),
                  marginTop: -hp('1.35%'),
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <View>
                  <LinearGradient
                    colors={focused ? active : unactive}
                    useAngle={true}
                    angle={145}
                    angleCenter={{x: 0.7, y: 0.5}}
                    borderRadius={100}
                    style={{
                      height: hp('3%'),
                      width: hp('3%'),
                      borderWidth: 2,
                      borderColor: '#242424',
                      borderRadius: 100,
                      alignSelf: 'flex-end',
                    }}></LinearGradient>
                </View>
                <Text
                  style={{
                    color: props?.ColorReducer?.tabtext,
                    fontFamily: 'OpenSans-ExtraBoldItalic',
                    fontSize: focused ? hp('2.3%') : hp('1.9%'),
                    marginLeft: hp('0.5%'),
                  }}>
                  {t(`${route.name}`)}
                </Text>
              </View>
            );
          },
        })}>
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('welcome'));
            },
          })}
        />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('status'));
            },
          })}
        />
        <Tab.Screen
          name="Electric"
          component={Electric}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('electric'));
            },
          })}
        />
        <Tab.Screen
          name="Systems"
          component={SystemStack}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('system'));
            },
          })}
        />
        <Tab.Screen
          name="Under Engine"
          component={UnderEngine}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('underengine'));
            },
          })}
        />
        <Tab.Screen
          name="Sailing"
          component={SallingScreen}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('sailing'));
            },
          })}
        />
        <Tab.Screen
          name="Weather Data"
          component={WeatherData}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('weather'));
            },
          })}
        />
        <Tab.Screen
          name="Admin"
          component={AdminStack}
          options={{headerShown: false}}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              store.dispatch(ChangedScreen('admin'));
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(App);
