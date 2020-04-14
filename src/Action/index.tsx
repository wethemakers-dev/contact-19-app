import {Language} from 'src/I18n/i18n';
import {
  CountryStats,
  Device,
  DeviceActionTypes,
  LOGIN,
  UPDATE_DEVICE,
  UPDATE_DEVICE_DATA,
  UPDATE_LANGUAGE,
  UPDATE_STATS,
  UPDATE_TOKEN,
  VERIFY_DEVICE,
} from './types';

export const loginUser = (device: Device): DeviceActionTypes => ({
  type: LOGIN,
  payload: device,
});

export const verifyDevice = (): DeviceActionTypes => ({
  type: VERIFY_DEVICE,
});

export const updateToken = (
  token: string,
  deviceID: string,
  device: Device,
  country?: string,
  ip?: string,
): DeviceActionTypes => ({
  type: UPDATE_TOKEN,
  payload: {token, device, ip, country, deviceID},
});

export const updateDeviceConfigs = ({
  sound,
  vibrate,
  alerts,
}: {
  sound?: boolean;
  vibrate?: boolean;
  alerts?: boolean;
}): DeviceActionTypes => ({
  type: UPDATE_DEVICE,
  payload: {sound, vibrate, alerts},
});

export const updateDeviceData = (device: Device): DeviceActionTypes => ({
  type: UPDATE_DEVICE_DATA,
  payload: device,
});

export const updateLanguage = (language: Language): DeviceActionTypes => ({
  type: UPDATE_LANGUAGE,
  language,
});

export const updateStats = (countryStats: CountryStats): DeviceActionTypes => ({
  type: UPDATE_STATS,
  payload: countryStats,
});
