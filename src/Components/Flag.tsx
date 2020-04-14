import React from 'react';
import {ViewStyle} from 'react-native';
import * as Flag from '../Components/flags';

export interface FlagProps {
  value?: string;
  style?: ViewStyle;
  width: number;
}

const FlagComponent: React.FC<FlagProps> = ({value, width, style}) => {
  // @ts-ignore
  const CountryFlag = Flag[value] || null;

  return CountryFlag ? (
    <CountryFlag
      style={[{width, height: (width * 3) / 4}, style]}
      fill="#000000"
    />
  ) : null;
};

export default FlagComponent;
