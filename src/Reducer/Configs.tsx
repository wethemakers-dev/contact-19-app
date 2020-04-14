import {NativeModules} from 'react-native';
import {
  Configs,
  DeviceActionTypes,
  LOGIN,
  UPDATE_DEVICE,
  UPDATE_DEVICE_DATA,
  UPDATE_LANGUAGE,
  UPDATE_STATS,
  UPDATE_TOKEN,
  VERIFY_DEVICE,
} from '../Action/types';

export const getSystemLocale = (): string => {
  let locale = 'en';

  if (NativeModules.SettingsManager && NativeModules.SettingsManager.settings) {
    locale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  return locale.substring(0, 2);
};

const deviceLanguage = getSystemLocale();

const initialState: Configs = {
  loggedIn: false,
  token: '',
  isRtl: deviceLanguage.includes('ar'),
  language: deviceLanguage || 'en',
};

export const ConfigsReducer = (
  state = initialState,
  action: DeviceActionTypes,
): Configs => {
  switch (action.type) {
    case LOGIN: {
      const newState = state;
      newState.loggedIn = true;
      newState.device = {
        ...newState.device,
        ...action.payload,
      };

      return {...newState};
    }
    case VERIFY_DEVICE: {
      const newState = state;
      newState.device = {
        ...newState.device,
        verified: true,
      };

      return {...newState};
    }
    case UPDATE_TOKEN: {
      const newState = state;
      newState.token = action.payload.token;
      newState.device = {
        ...newState.device,
        ...action.payload.device,
        deviceID: action.payload.deviceID,
        country: action.payload.country,
        ip: action.payload.ip,
      };

      return {...newState};
    }
    case UPDATE_DEVICE: {
      const newState = state;
      newState.device = {
        ...newState.device,
        sound: action.payload.sound,
        vibrate: action.payload.vibrate,
        alerts: action.payload.alerts,
      };

      return {...newState};
    }
    case UPDATE_DEVICE_DATA: {
      const newState = state;
      newState.device = action.payload;

      return {...newState};
    }
    case UPDATE_LANGUAGE: {
      const newState = state;
      newState.language = action.language.value;
      newState.isRtl = action.language.isRtl;

      return {...newState};
    }
    case UPDATE_STATS: {
      const newState = state;
      newState.stats = action.payload;

      return {...newState};
    }
    default:
      return state;
  }
};
