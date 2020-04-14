import {GoogleSignin} from '@react-native-community/google-signin';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StatusBar} from 'react-native';
import BackgroundGeolocation from 'react-native-background-geolocation';
import {Provider} from 'react-redux';
import {compose, createStore, Store} from 'redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

import 'react-native-gesture-handler';
import './I18n/i18n';

import Home from './Containers/Home';
import Register from './Containers/Register';
import Splash from './Containers/Splash';
import Verify from './Containers/Verify';
import {persistedReducer} from './Reducer';

// @ts-ignore
// tslint:disable-next-line: no-unsafe-any
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// tslint:disable-next-line: no-unsafe-any
const store = createStore(persistedReducer, enhancedCompose()) as Store;
const persistor = persistStore(store);

export type RootStackParamList = {
  Splash: undefined;
  Register: undefined;
  Verify: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

GoogleSignin.configure();

messaging().registerDeviceForRemoteMessages();

const App = () => {
  const {t} = useTranslation();

  useEffect(() => {
    const configs = {
      logLevel: BackgroundGeolocation.LOG_LEVEL_DEBUG,
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      allowIdenticalLocations: true,
      stopOnTerminate: false,
      startOnBoot: true,
      autoSync: true,
      autoSyncThreshold: 5,
      batchSync: true,
      preventSuspend: true,
      foregroundService: true,
      locationAuthorizationAlert: {
        titleWhenOff: t('error'),
        titleWhenNotEnabled: t('error'),
        instructions: t('permission_error'),
        settingsButton: t('settings'),
        cancelButton: t('cancel'),
      },
      notification: {
        title: 'Contact-19',
        text: t('location-services-activated'),
      },
    };

    BackgroundGeolocation.ready(configs);

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage.notification) {
        Alert.alert(
          remoteMessage.notification?.title || '',
          remoteMessage.notification?.body,
          [{text: t('done')}],
        );
      }
    });

    return () => {
      unsubscribe();
      BackgroundGeolocation.removeListeners();
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'light-content'}
          />
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Verify" component={Verify} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
