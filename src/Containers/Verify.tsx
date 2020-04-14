import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import {connect, ConnectedProps, useDispatch} from 'react-redux';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {HalfCircle} from '../../Assets/Images';
import {verifyDevice} from '../Action';
import {RootStackParamList} from '../App';
import Button from '../Components/Button';
import CustomText from '../Components/Text';
import {RootState} from '../Reducer';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

const mapState = (state: RootState) => ({
  configs: state.Configs,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type VerifyProps = PropsFromRedux & {
  navigation: StackNavigationProp<RootStackParamList, 'Verify'>;
};

const Verify: React.FC<VerifyProps> = ({
  navigation: {goBack, canGoBack, replace, reset},
  configs: {isRtl, device},
}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({value: code, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const mobile = isRtl ? `${device?.mobile?.substr(1)}+` : device?.mobile;

  return (
    <ImageBackground
      source={HalfCircle}
      resizeMode={'stretch'}
      style={styles.backgroundContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.textContainer}>
            <TouchableOpacity
              onPress={() => {
                canGoBack() ? goBack() : replace('Register');
              }}
              style={{flexDirection: 'row'}}>
              <IIcon
                name={
                  canGoBack()
                    ? isRtl
                      ? 'ios-arrow-round-forward'
                      : 'ios-arrow-round-back'
                    : 'ios-refresh'
                }
                size={canGoBack() ? 50 : 30}
                color={Colors.blue}
              />
              {!canGoBack() && (
                <CustomText
                  text={t('try-again')}
                  color={Colors.darkBlue}
                  size={Fonts.l}
                  fontFamily={Fonts.regular}
                  style={{marginHorizontal: 10}}
                />
              )}
            </TouchableOpacity>
            <CustomText
              text={t('verify-mobile')}
              color={Colors.darkBlue}
              size={Fonts.l}
              fontFamily={Fonts.bold}
              align="left"
              style={{marginTop: 10}}
            />
            <CustomText
              text={`${t('enter-code')} ${mobile}`}
              color={Colors.darkBlue}
              size={Fonts.md}
              fontFamily={Fonts.regular}
              align="left"
              style={{marginTop: 10}}
            />
          </View>

          <CodeField
            ref={ref}
            {...props}
            value={code}
            onChangeText={setCode}
            cellCount={4}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <Button
            text={t('continue')}
            onPress={async () => {
              if (code.length < 4) return;

              dispatch(verifyDevice());
              reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}
          />
        </View>

        <View style={styles.linkText}>
          <CustomText
            text=""
            color={Colors.darkBlue}
            fontFamily={Fonts.regular}
            size={Fonts.md}
            align="center"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContent: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 50,
  },
  textContainer: {
    alignSelf: 'flex-start',
    width: '75%',
    marginBottom: 60,
  },
  linkText: {
    paddingBottom: 20,
  },
  codeFiledRoot: {
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 1,
    borderColor: Colors.blue,
    textAlign: 'center',
    marginHorizontal: 10,
    color: Colors.darkBlue,
    borderRadius: 25,
    fontFamily: Fonts.regular,
  },
  focusCell: {
    borderColor: Colors.lightBlue,
  },
});

export default connector(Verify);
