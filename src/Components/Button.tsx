import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

export interface CustomButtonProps {
  text?: string;
  onPress?: () => void;
  ButtonIcon?: React.FC;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  ButtonIcon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}>
      {ButtonIcon && <ButtonIcon />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    backgroundColor: Colors.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 2,
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: Fonts.sm,
    color: Colors.black,
    flex: 1,
  },
});
