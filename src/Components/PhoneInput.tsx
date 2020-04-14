import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
} from 'libphonenumber-js';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import CountryPicker, {
  CountryCode as PickerCountryCode,
  Flag,
} from 'react-native-country-picker-modal';

import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

type PhoneInputProps = {
  country: string;
  isRtl: boolean;
  changeFullMobileNumber: (value: string) => void;
};

export const PhoneInput: React.FC<PhoneInputProps> = ({
  isRtl,
  country,
  changeFullMobileNumber,
}) => {
  const {t} = useTranslation();
  const [mobile, changeMobile] = useState('');
  const [countryCode, changeCountryCode] = useState('');
  const [countryModal, toggleCountryModal] = useState(false);
  const [countryCallingCode, changeCallingCountryCode] = useState('');

  useEffect(() => {
    changeCallingCountryCode(
      `+${getCountryCallingCode((country as CountryCode) || 'US')}`,
    );
    changeCountryCode(country || 'US');
  }, [country]);

  return (
    <View
      style={[
        styles.phoneInputContainer,
        isRtl && {flexDirection: 'row-reverse'},
      ]}>
      <TouchableOpacity
        onPress={() => {
          toggleCountryModal(true);
        }}
        style={{
          flexDirection: isRtl ? 'row-reverse' : 'row',
        }}>
        <Flag
          countryCode={(countryCode as PickerCountryCode) || 'US'}
          flagSize={30}
        />
        <TextInput
          keyboardType={'phone-pad'}
          value={countryCallingCode}
          editable={false}
          style={styles.countryCodeInput}
          pointerEvents="none"
          allowFontScaling={false}
        />
      </TouchableOpacity>

      <TextInput
        keyboardType={'number-pad'}
        placeholder={t('enter-mobile')}
        style={styles.mobileInput}
        allowFontScaling={false}
        autoCorrect={false}
        placeholderTextColor={Colors.darkGray}
        underlineColorAndroid={'transparent'}
        value={mobile}
        onChangeText={(value) => {
          changeMobile(value);
          changeFullMobileNumber(countryCallingCode + value);
        }}
      />

      <CountryPicker
        countryCode="JO"
        onSelect={(value) => {
          changeCallingCountryCode(
            `+${getCountryCallingCode(value.cca2 as CountryCode)}`,
          );

          changeCountryCode(value.cca2);

          changeMobile('');
          changeFullMobileNumber('');
        }}
        onClose={() => {
          toggleCountryModal(false);
        }}
        containerButtonStyle={{display: 'none'}}
        withFilter
        withEmoji
        countryCodes={getCountries() as PickerCountryCode[]}
        visible={countryModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: 'row',
  },
  countryCodeInput: {
    color: Colors.blue,
    fontFamily: Fonts.regular,
    marginHorizontal: 10,
    fontSize: Fonts.xsm,
  },
  mobileInput: {
    flex: 1,
    color: Colors.darkBlue,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    fontSize: Fonts.xsm,
  },
});
