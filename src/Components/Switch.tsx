import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Colors from '../Theme/Colors';

export interface SwitchProps {
  value?: boolean;
  disabled?: boolean;
  toggleSwitch?: (value: boolean) => void;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

const SwitchComponent: React.FC<SwitchProps> = ({
  value,
  toggleSwitch,
  align,
  disabled = false,
}) => {
  return (
    <>
      <View style={[styles.container, {alignItems: align}]}>
        <Switch
          disabled={disabled}
          onValueChange={toggleSwitch}
          value={value}
          thumbColor={Colors.white}
          ios_backgroundColor={Colors.lightGray}
          trackColor={{
            false: Colors.lightGray,
            true: Colors.darkBlue,
          }}
        />
      </View>
    </>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
