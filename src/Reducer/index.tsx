import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import {DeviceActionTypes} from '../Action/types';
import {ConfigsReducer} from './Configs';

const rootReducer = combineReducers({
  Configs: ConfigsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer<RootState, DeviceActionTypes>(
  {
    key: 'd19',
    storage: AsyncStorage,
  },
  rootReducer,
);
