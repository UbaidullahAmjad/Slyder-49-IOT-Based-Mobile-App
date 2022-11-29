import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import {NetworkInfo} from 'react-native-network-info';
import init from 'react_native_mqtt';
import store from '..';
import {gettimestamp} from '../../Confiq/Helper';
import {BMS100} from './BMS100';
import {BMS24} from './BMS24';
import {Modus} from './Modus';
import {Motor} from './Motor';
import {N2K} from './N2k/N2K';
import {
  CHANGE_BMS100,
  CHANGE_BMS24,
  CHANGE_MODBUS,
  CHANGE_MOTOR,
  CHANGE_MQTT_CLIENT,
  CHANGE_N2K,
  FALSE_HEART_BEAT,
} from './type';
import {underengineData} from './Testing/UnderEngine/Underengine';
import {SailingData} from './Testing/Sailing/Sailing';
import {StatusData} from './Testing/Status/StatusData';
import {ElectricData} from './Testing/Electric/Electric';
import {WeatherData} from './Testing/WeatherData/Weather';
import {SystemData} from './Testing/System/SystemData';

export const ConnectMqtt = (
  ip,
  port,
  title,
  FirstTime,
  //  decimalformat,
  ConnectionString,
  ConnectionFailedString,
) => {
  return async dispatch => {
    init({
      size: 10000,
      storageBackend: AsyncStorage,
      defaultExpires: 1000 * 3600 * 24,
      enableCache: false,
      sync: {},
    });
    if (FirstTime) {
      const value = await AsyncStorage.getItem('@MQTT');
      if (value != null) {
        const data = JSON.parse(value);
        var tboxTopic = data.title;
        var tboxServer = data.ip;
        var tboxPort = parseInt(data.port);
        var decimal = data.decimalformat;
        // if (decimal == '.') {
        //     dispatch({ type: CHANGE_DECIMAL_FORMAT, payload: true })
        // } else {
        //     dispatch({ type: CHANGE_DECIMAL_FORMAT, payload: false })
        // }
      } else {
        var tboxTopic = title;
        var tboxServer = ip;
        var tboxPort = parseInt(port);
      }
    } else {
      if (store.getState().Mqtt.client != null) {
        try {
          store.getState().Mqtt.client.disconnect();
          dispatch({type: CHANGE_MQTT_CLIENT, payload: null});
          // dispatch({ type: CHANGE_DECIMAL_FORMAT, payload: decimalformat == '.' ? true : false })
        } catch (error) {}
      }
      var tboxTopic = title;
      var tboxServer = ip;
      var tboxPort = parseInt(port);
    }
    try {
      NetworkInfo.getIPAddress().then(async ipAddressport => {
        console.log('ip', ipAddressport, tboxServer, tboxPort);
        var client = new Paho.MQTT.Client(
          tboxServer,
          Number(tboxPort),
          'GMM  - Control' + ipAddressport,
        );

        // client.connect({ onSuccess: onConnect, useSSL: true ,userName:"brokerUsername", password:"brokerPassword" })
        client.connect({onSuccess: onConnect});
        function onConnect() {
          dispatch({type: CHANGE_MQTT_CLIENT, payload: client});
          client.subscribe(tboxTopic);
          if (!FirstTime) {
            ToastAndroid.show(ConnectionString, ToastAndroid.LONG);
          }
          var theMessage = `slyderapp;status;connected;${ipAddressport};${gettimestamp()}`;
          var varMessage = new Paho.MQTT.Message(theMessage);
          varMessage.destinationName = 'boat/cmd';
          client.send(varMessage);
        }

        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = msg => {
          onMessageArrived(msg, dispatch);
        };

        function onConnectionLost(responseObject) {
          if (!FirstTime) {
            ToastAndroid.show(ConnectionFailedString, ToastAndroid.LONG);
          }
          dispatch({type: CHANGE_MQTT_CLIENT, payload: null});
          dispatch({type: 'DISCONNECTED', payload: null});
          // var theMessage = `slyderapp;status;disconnected;${gettimestamp()}`
          // var varMessage = new Paho.MQTT.Message(theMessage);
          // varMessage.destinationName = 'boat/cmd';
          // client.send(varMessage);
          if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage);
          }
        }
      });
    } catch (error) {
      console.log('error in mqtt', error);
    }
  };
};

var timestamp = [];
var result = true;

const onMessageArrived = async (theMessage, dispatch) => {
  const split = theMessage.payloadString.split(';');
  if (timestamp.length > 0) {
    result = JSON.stringify(split) != JSON.stringify(timestamp);
  }
  if (store.getState().ScreenStatusReducer?.currentScreen == 'underengine') {
    if (result) {
      store.dispatch(underengineData(theMessage));
    }
  }

  if (store.getState().ScreenStatusReducer?.currentScreen == 'sailing') {
    if (result) {
      store.dispatch(SailingData(theMessage));
    }
  }

  if (store.getState().ScreenStatusReducer?.currentScreen == 'status') {
    if (result) {
      store.dispatch(StatusData(theMessage));
    }
  }

  if (store.getState().ScreenStatusReducer?.currentScreen == 'electric') {
    if (result) {
      store.dispatch(ElectricData(theMessage));
    }
  }

  if (store.getState().ScreenStatusReducer?.currentScreen == 'weather') {
    if (result) {
      store.dispatch(WeatherData(theMessage));
    }
  }

  if (store.getState().ScreenStatusReducer?.currentScreen == 'system') {
    if (result) {
      store.dispatch(SystemData(theMessage));
    }
  }

  // if (timestamp.length > 0) {
  //     result = JSON.stringify(split) != JSON.stringify(timestamp)
  // }

  // if (result) {
  //     if (split[0] == 'bms100') {
  //         'worklet';
  //         BMS100(split, dispatch)
  //         dispatch({
  //             type: CHANGE_BMS100, payload: true
  //         })
  //     }
  //     else if (split[0] == 'bms24') {
  //         'worklet';
  //         BMS24(split, dispatch)
  //         dispatch({
  //             type: CHANGE_BMS24, payload: true
  //         })
  //     }
  //     else if (split[0] == 'n2k') {
  //         'worklet';
  //         N2K(split, dispatch)
  //         dispatch({
  //             type: CHANGE_N2K, payload: true
  //         })
  //     }
  //     else if (split[0] == 'motor') {
  //         'worklet';
  //         Motor(split, dispatch)
  //         dispatch({
  //             type: CHANGE_MOTOR, payload: true
  //         })
  //     }
  //     else if (split[0] == 'modbus') {
  //         'worklet';
  //         Modus(split, dispatch)
  //         dispatch({
  //             type: CHANGE_MODBUS, payload: true
  //         })
  //     } else {
  //         dispatch({
  //             type: FALSE_HEART_BEAT, payload: true
  //         })
  //     }
  // }
  timestamp = split;
};

export const DisconnectMqtt = () => {
  return async dispatch => {
    try {
      NetworkInfo.getIPAddress().then(async ipAddressport => {
        var theMessage = `slyderapp;status;disconnect;${ipAddressport};${gettimestamp()}`;
        var varMessage = new Paho.MQTT.Message(theMessage);
        varMessage.destinationName = 'boat/cmd';
        store.getState().Mqtt.client.send(varMessage);
        store.getState().Mqtt.client.disconnect();
      });
    } catch (error) {}
  };
};
