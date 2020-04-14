import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

export interface CustomTextProps {
  text: string | number | undefined | null | object;
  color?: string;
  size?: number;
  align?: string;
  fontFamily?: string;
  style?: object;
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  color,
  size,
  align,
  fontFamily,
  style,
}) => (
  <Text
    allowFontScaling={false}
    style={[
      style,
      styles.subTitle,
      {
        fontSize: size,
        color,
        fontFamily,
        alignSelf:
          align === 'left'
            ? 'flex-start'
            : align === 'right'
            ? 'flex-end'
            : 'auto',
        textAlign: align,
      },
    ]}>
    {text}
  </Text>
);

export default CustomText;

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.xsm,
    color: Colors.white,
  },
});
