import {Language} from '../I18n/i18n';

export const LOGIN = 'LOGIN';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export const UPDATE_DEVICE_DATA = 'UPDATE_DEVICE_DATA';
export const UPDATE_STATS = 'UPDATE_STATS';
export const VERIFY_DEVICE = 'VERIFY_DEVICE';

export interface Device {
  ip?: string;
  platform?: string;
  deviceID?: string;
  _id?: string;
  token?: string;
  country?: string;
  email?: string | null;
  mobile?: string;
  verified?: boolean;
  language?: string;
  name?: string | null;
  fbID?: string;
  googleID?: string;
  appleID?: string;
  sound?: boolean;
  vibrate?: boolean;
  alerts?: boolean;
  infected?: boolean;
  isolation?: boolean;
}

export interface CountryStats {
  coordinates: Coordinates;
  name: string;
  code: string;
  population: number;
  updated_at: string;
  today: Today;
  latest_data: LatestData;
  timeline: Timeline[];
}

interface Timeline {
  updated_at: string;
  date: string;
  deaths: number;
  confirmed: number;
  active: number;
  recovered: number;
  new_confirmed: number;
  new_recovered: number;
  new_deaths: number;
  is_in_progress?: boolean;
}

interface LatestData {
  deaths: number;
  confirmed: number;
  recovered: number;
  critical: number;
  calculated: Calculated;
}

interface Calculated {
  death_rate: number;
  recovery_rate: number;
  recovered_vs_death_ratio: number;
  cases_per_million_population: number;
}

interface Today {
  deaths: number;
  confirmed: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Configs {
  device?: Device;
  stats?: CountryStats;
  loggedIn: boolean;
  token: string;
  language: string;
  isRtl: boolean;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: Device;
}

interface VerifyDeviceAction {
  type: typeof VERIFY_DEVICE;
}

interface UpdateTokenAction {
  type: typeof UPDATE_TOKEN;
  payload: {
    token: string;
    deviceID: string;
    device: Device;
    country?: string;
    ip?: string;
  };
}

interface UpdateDeviceAction {
  type: typeof UPDATE_DEVICE;
  payload: {
    sound?: boolean;
    vibrate?: boolean;
    alerts?: boolean;
  };
}

interface UpdateDeviceDataAction {
  type: typeof UPDATE_DEVICE_DATA;
  payload: Device;
}

interface UpdateLanguageAction {
  type: typeof UPDATE_LANGUAGE;
  language: Language;
}

interface UpdateStatsAction {
  type: typeof UPDATE_STATS;
  payload: CountryStats;
}

export type DeviceActionTypes =
  | LoginAction
  | UpdateTokenAction
  | UpdateLanguageAction
  | UpdateDeviceAction
  | UpdateDeviceDataAction
  | UpdateStatsAction
  | VerifyDeviceAction;
