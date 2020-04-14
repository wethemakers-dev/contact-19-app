import {StackNavigationProp} from '@react-navigation/stack';
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  AppState,
  AppStateStatus,
  I18nManager,
  Image,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import ReactNativeRestart from 'react-native-restart';
import EIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect, ConnectedProps, useDispatch} from 'react-redux';

import {corona} from '../../Assets/Images';
import {updateLanguage, updateStats} from '../Action';
import {CountryStats} from '../Action/types';
import {getCountryStats} from '../API';
import {RootStackParamList} from '../App';
import Flag from '../Components/Flag';
import CoverIcon from '../Components/icons/cover';
import ContactIcon from '../Components/icons/distance';
import HomeIcon from '../Components/icons/home';
import WashIcon from '../Components/icons/wash';
import CustomText from '../Components/Text';
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

type HomeProps = PropsFromRedux & {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({
  configs: {isRtl, device, token, stats, language},
}) => {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const [modalHelpVisible, setShowHelpModal] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  const ThrowError = () => {
    Alert.alert(t('error'), t('error-msg'), [
      {
        text: t('done'),
        style: 'destructive',
      },
    ]);
  };

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, [appState]);

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      getCountryStats<{data: CountryStats}>(device?.country)
        .then((newStats) => {
          dispatch(updateStats(newStats.data));
        })
        .catch(ThrowError);
    }

    setAppState(nextAppState);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          <View style={styles.topSection}>
            <CustomText
              text={t('caption')}
              color={Colors.darkBlue}
              size={Fonts.l}
              fontFamily={Fonts.bold}
              align="left"
              style={{alignSelf: 'flex-start', flex: 0.9}}
            />

            <View style={styles.topButtons}>
              <RNPickerSelect
                value={language}
                children={
                  <FAIcon name="language" size={18} color={Colors.darkBlue} />
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
                            setTimeout(ReactNativeRestart.Restart, 500);
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
                  inputIOSContainer: styles.pickerContainer,
                  inputAndroidContainer: styles.pickerContainer,
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

            <View style={{width: '100%'}}>
              <View style={styles.borderBottom} />
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={corona}
              style={{width: 120, height: 120}}
              resizeMode={'contain'}
            />
            <CustomText
              text={t('prevention')}
              color={Colors.darkBlue}
              size={Fonts.md}
              fontFamily={Fonts.bold}
              align={'center'}
              style={{marginVertical: 10}}
            />

            <View style={styles.preventionContainer}>
              <HomeIcon fill={Colors.maroon} width={20} height={20} />
              <CustomText
                text={t('prevention-1')}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{marginHorizontal: 15}}
              />
            </View>

            <View style={styles.preventionContainer}>
              <ContactIcon fill={Colors.maroon} width={20} height={20} />
              <CustomText
                text={t('prevention-2')}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{marginHorizontal: 15}}
              />
            </View>

            <View style={styles.preventionContainer}>
              <WashIcon fill={Colors.maroon} width={20} height={20} />
              <CustomText
                text={t('prevention-3')}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{marginHorizontal: 15}}
              />
            </View>

            <View style={styles.preventionContainer}>
              <CoverIcon fill={Colors.maroon} width={20} height={20} />
              <CustomText
                text={t('prevention-4')}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{marginHorizontal: 15}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <CustomText
                text={t('sick')}
                color={Colors.darkBlue}
                size={Fonts.md}
                fontFamily={Fonts.regular}
                style={{marginHorizontal: 15}}
              />

              <TouchableOpacity
                style={styles.callButton}
                activeOpacity={0.8}
                onPress={() => {
                  let phoneNumber = '';
                  if (Platform.OS === 'android') {
                    phoneNumber = 'tel:911';
                  } else {
                    phoneNumber = 'telprompt:911';
                  }
                  Linking.openURL(phoneNumber);
                }}>
                {isRtl && <EIcon name="phone" color={Colors.white} size={20} />}
                {!isRtl && (
                  <Icon name="ios-call" color={Colors.white} size={20} />
                )}
                <CustomText
                  text={t('call')}
                  color={Colors.white}
                  size={Fonts.md}
                  fontFamily={Fonts.regular}
                  style={{marginHorizontal: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{margin: 15}}>
            <View style={styles.flagContainer}>
              <Flag
                value={device?.country}
                width={40}
                style={{borderRadius: 5, overflow: 'hidden'}}
              />
              <CustomText
                text={stats?.name}
                color={Colors.darkBlue}
                size={Fonts.l}
                fontFamily={Fonts.bold}
                style={{marginHorizontal: 15}}
              />
            </View>
            <View style={styles.topStats}>
              <CustomText
                text={t('cases')}
                color={Colors.darkBlue}
                size={Fonts.xxsm}
                fontFamily={Fonts.regular}
                style={{flex: 1}}
                align={'center'}
              />
              <CustomText
                text={t('recovered')}
                color={Colors.darkBlue}
                size={Fonts.xxsm}
                fontFamily={Fonts.regular}
                style={{flex: 1}}
                align={'center'}
              />
              <CustomText
                text={t('deaths')}
                color={Colors.darkBlue}
                size={Fonts.xxsm}
                fontFamily={Fonts.regular}
                style={{flex: 1}}
                align={'center'}
              />
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 15}}>
              <CustomText
                text={Number(stats?.latest_data.confirmed).toLocaleString(
                  'US-en',
                )}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{flex: 1}}
                align={'center'}
              />
              <CustomText
                text={Number(stats?.latest_data.recovered).toLocaleString(
                  'US-en',
                )}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{flex: 1}}
                align={'center'}
              />
              <CustomText
                text={Number(stats?.latest_data.deaths).toLocaleString('US-en')}
                color={Colors.darkBlue}
                size={Fonts.xsm}
                fontFamily={Fonts.regular}
                style={{flex: 1}}
                align={'center'}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.helpContent}>
        <View style={styles.helpContentContainer}>
          <CustomText
            text={t('how-contact-19-help')}
            color={Colors.darkBlue}
            size={Fonts.sm}
            fontFamily={Fonts.regular}
            align="left"
            style={{flex: 0.8}}
          />
          <TouchableOpacity
            style={styles.quesContainer}
            activeOpacity={0.8}
            onPress={() => setShowHelpModal(true)}>
            <Icon
              name="ios-help"
              color="white"
              size={35}
              style={[isRtl && {transform: [{rotateY: '180deg'}]}]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={modalHelpVisible}
        onSwipeComplete={() => setShowHelpModal(false)}
        onBackdropPress={() => setShowHelpModal(false)}
        propagateSwipe
        backdropColor={Colors.white}
        backdropOpacity={1}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={[styles.quesContainer, {alignSelf: 'flex-end'}]}
            activeOpacity={0.8}
            onPress={() => setShowHelpModal(false)}>
            <Icon name="ios-close" color="white" size={25} />
          </TouchableOpacity>

          <HowToModal />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollView: {
    minHeight: '100%',
    justifyContent: 'space-evenly',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  topSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexGrow: 0.1,
  },
  topButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: 2,
    marginHorizontal: 10,
    width: 40,
    height: 40,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: 2,
    marginHorizontal: 10,
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
  borderBottom: {
    borderBottomWidth: 3,
    width: '15%',
    marginTop: 15,
  },
  helpContent: {
    backgroundColor: Colors.gray,
    padding: 25,
    width: '100%',
  },
  helpContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
  settingsModalView: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    paddingVertical: 30,
    justifyContent: 'center',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  topStats: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#F2F2F2',
    paddingVertical: 10,
  },
  preventionContainer: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 50,
  },
  callButton: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: Colors.darkBlue,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export default connector(Home);
