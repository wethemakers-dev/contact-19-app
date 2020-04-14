import {StackNavigationProp} from '@react-navigation/stack';
import {isValidNumber} from 'libphonenumber-js';
import _ from 'lodash';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  I18nManager,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import RNRestart from 'react-native-restart';
import EIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import {connect, ConnectedProps, useDispatch} from 'react-redux';

import appleAuth, {
  AppleAuthCredentialState,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

import {HalfCircle} from '../../Assets/Images';
import {loginUser, updateLanguage} from '../Action';
import {Device} from '../Action/types';
import {RootStackParamList} from '../App';
import Button from '../Components/Button';
import Flag from '../Components/Flag';
import AppleIcon from '../Components/icons/apple';
import FacebookIcon from '../Components/icons/facebook';
import GoogleIcon from '../Components/icons/google';
import {PhoneInput} from '../Components/PhoneInput';
import CustomText from '../Components/Text';
import {useKeyboard} from '../Hooks/Keyboard';
import {Language, languages} from '../I18n/i18n';
import {RootState} from '../Reducer';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import HowToModal from './Modals/HowToModal';

const mapState = (state: RootState) => ({
  configs: state.Configs,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type RegisterProps = PropsFromRedux & {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};

const Register: React.FC<RegisterProps> = ({
  navigation: {navigate, replace},
  configs: {language, isRtl, device, stats},
}) => {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const [fullMobileNumber, changeFullMobileNumber] = useState('');
  const [modalVisible, setShowModal] = useState(false);
  const [keyboardHeight] = useKeyboard();

  const LoginWithFacebook = async () => {
    try {
      return LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]).then(async ({isCancelled}) => {
        if (!isCancelled) {
          await AccessToken.getCurrentAccessToken().then(
            async (accessToken) => {
              const infoRequest = new GraphRequest(
                '/me?fields=id,email,name',
                {accessToken: accessToken?.accessToken},
                (error, result) => {
                  if (error) {
                    ThrowError();
                  } else {
                    Login({
                      // @ts-ignore
                      name: result?.name,
                      // @ts-ignore
                      email: result?.email,
                      // @ts-ignore
                      fbID: result?.id,
                    });
                  }
                },
              );
              new GraphRequestManager().addRequest(infoRequest).start();
            },
          );
        }
      }, ThrowError);
    } catch (error) {
      ThrowError();
    }
  };

  const LoginWithApple = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });

      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
        Login({
          name:
            device?.name ??
            `${appleAuthRequestResponse.fullName?.givenName} ${appleAuthRequestResponse.fullName?.familyName}`,
          email: device?.email ?? appleAuthRequestResponse.email,
          appleID: appleAuthRequestResponse.user,
        });
      }
    } catch (error) {
      //
    }
  };

  const LoginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();

      Login({
        name: user.name,
        email: user.email,
        googleID: user.id,
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // cancelled
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        ThrowError();
      } else {
        ThrowError();
      }
    }
  };

  const Login = async (user?: Device) => {
    if (!user) {
      return ThrowError();
    }

    try {
      const deviceVerifiedNumber =
        device?.verified && fullMobileNumber === device?.mobile;

      dispatch(
        loginUser(
          deviceVerifiedNumber
            ? {
                ...user,
              }
            : {
                ...user,
                mobile: fullMobileNumber,
                verified: false,
              },
        ),
      );

      return deviceVerifiedNumber ? replace('Home') : navigate('Verify');
    } catch (error) {
      ThrowError();
    }
  };

  const ThrowError = (mobile = false) => {
    Alert.alert(
      t(mobile ? 'invalid-mobile' : 'error'),
      t(mobile ? 'invalid-mobile-msg' : 'error-msg'),
      [
        {
          text: t('done'),
          style: 'destructive',
        },
      ],
    );
  };

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
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          keyboardDismissMode={'interactive'}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{minHeight: '100%'}}>
          <View style={styles.topContent}>
            <View style={{alignSelf: 'flex-end'}}>
              <RNPickerSelect
                value={language}
                children={
                  <Icon name="language" size={18} color={Colors.darkBlue} />
                }
                useNativeAndroidPickerStyle={false}
                doneText={t('done')}
                placeholder={{
                  label: t('select-language'),
                  value: null,
                  color: 'gray',
                }}
                onValueChange={async (value: string) => {
                  if (value) {
                    const currentLanguage = _.find(
                      languages,
                      (lang) => lang.value === language,
                    ) as Language;

                    const selectedLanguage = _.find(
                      languages,
                      (lang) => lang.value === value,
                    ) as Language;

                    dispatch(updateLanguage(selectedLanguage));

                    i18n.changeLanguage(selectedLanguage.value);
                    I18nManager.forceRTL(
                      !I18nManager.isRTL && selectedLanguage.isRtl,
                    );

                    if (
                      (!I18nManager.isRTL && selectedLanguage.isRtl) ||
                      (I18nManager.isRTL && !selectedLanguage.isRtl)
                    ) {
                      Alert.alert(t('change-language'), undefined, [
                        {
                          onPress: () => {
                            setTimeout(RNRestart.Restart, 500);
                          },
                          text: t('restart'),
                          style: 'cancel',
                        },
                        {
                          onPress: () => {
                            dispatch(updateLanguage(currentLanguage));
                            i18n.changeLanguage(currentLanguage.value);
                            I18nManager.forceRTL(
                              !I18nManager.isRTL && currentLanguage.isRtl,
                            );
                          },
                          text: t('cancel'),
                        },
                      ]);
                    }
                  }
                }}
                items={languages}
                style={{
                  inputIOSContainer: styles.langPickerContainer,
                  inputAndroidContainer: styles.langPickerContainer,
                  inputIOS: {
                    ...styles.pickerInput,
                    textAlign: isRtl ? 'right' : 'left',
                  },
                  inputAndroid: {
                    ...styles.pickerInput,
                    textAlign: isRtl ? 'right' : 'left',
                  },
                  chevron: {
                    display: 'none',
                  },
                }}
                Icon={() => null}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.flagContainer}>
                <Flag
                  value={device?.country}
                  width={30}
                  style={{
                    borderRadius: 5,
                    overflow: 'hidden',
                  }}
                />
                <CustomText
                  text={stats?.name}
                  color={Colors.darkBlue}
                  size={Fonts.md}
                  fontFamily={Fonts.regular}
                  style={{marginHorizontal: 15}}
                />
              </View>
              <CustomText
                text="Contact-19"
                color={Colors.darkBlue}
                size={Fonts.l}
                fontFamily={Fonts.bold}
                align="left"
              />
              <CustomText
                text={t('helps-you-and-others')}
                color={Colors.darkBlue}
                size={Fonts.md}
                fontFamily={Fonts.regular}
                align="left"
                style={{marginTop: 10}}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setShowModal(true);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
                alignSelf: 'flex-start',
              }}>
              <CustomText
                text={t('see-how')}
                color={Colors.darkBlue}
                size={Fonts.md}
                fontFamily={Fonts.bold}
              />
              <EIcon
                name={!isRtl ? 'arrow-right' : 'arrow-left'}
                size={35}
                color={Colors.blue}
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>

            <View>
              <View style={[styles.pickerContainer]}>
                <PhoneInput
                  isRtl={isRtl}
                  country={device?.country?.toUpperCase() || 'US'}
                  changeFullMobileNumber={changeFullMobileNumber}
                />
              </View>

              <Button
                text={t('connect-with-facebook')}
                onPress={() => {
                  Login({});
                }}
                ButtonIcon={() => <FacebookIcon style={styles.icon} />}
              />
              {Platform.OS === 'ios' && appleAuth.isSupported && (
                <Button
                  text={t('connect-with-apple')}
                  onPress={() => {
                    Login({});
                  }}
                  ButtonIcon={() => <AppleIcon style={styles.icon} />}
                />
              )}
              <Button
                text={t('connect-with-google')}
                onPress={() => {
                  Login({});
                }}
                ButtonIcon={() => <GoogleIcon style={styles.icon} />}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.linkText,
              Platform.OS === 'ios' && {paddingBottom: keyboardHeight},
            ]}
            activeOpacity={0.8}>
            <CustomText
              text={''}
              color={Colors.darkBlue}
              fontFamily={Fonts.regular}
              size={Fonts.xxsm}
              align="center"
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        propagateSwipe
        backdropColor={Colors.white}
        backdropOpacity={1}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={[styles.quesContainer, {alignSelf: 'flex-end'}]}
            activeOpacity={0.8}
            onPress={() => setShowModal(false)}>
            <IIcon name="ios-close" color="white" size={25} />
          </TouchableOpacity>

          <HowToModal />
        </View>
      </Modal>
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
  },
  topContent: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 10,
  },
  textContainer: {
    alignSelf: 'flex-start',
    width: '75%',
  },
  langPickerContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerInput: {
    padding: 0,
    fontFamily: Fonts.regular,
    color: Colors.darkBlue,
  },
  pickerContainer: {
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.darkBlue,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 2,
    marginTop: 10,
  },
  icon: {
    marginRight: 8,
    width: 25,
    height: 25,
  },
  linkText: {
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  quesContainer: {
    backgroundColor: Colors.darkBlue,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 30,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  privacyModalView: {
    width: '100%',
    height: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
});

export default connector(Register);
