import messaging from '@react-native-firebase/messaging';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  I18nManager,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import RNRestart from 'react-native-restart';
import {connect, ConnectedProps, useDispatch} from 'react-redux';

import {Logo} from '../../Assets/Images';
import {updateStats, updateToken} from '../Action';
import {CountryStats, Device} from '../Action/types';
import {getCountry, getCountryStats} from '../API';
import {RootStackParamList} from '../App';
import Flag from '../Components/Flag';
import CustomText from '../Components/Text';
import {RootState} from '../Reducer';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

const mapState = (state: RootState) => ({
  configs: state.Configs,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type SplashProps = PropsFromRedux & {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const Splash: React.FC<SplashProps> = ({
  navigation: {replace},
  configs: {loggedIn, token: savedToken, language, isRtl, device},
}) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();

  const ThrowError = () => {
    Alert.alert(t('error'), t('error-msg'), [
      {
        text: t('done'),
        style: 'destructive',
      },
    ]);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    I18nManager.forceRTL(!I18nManager.isRTL && isRtl);
    if ((!I18nManager.isRTL && isRtl) || (I18nManager.isRTL && !isRtl)) {
      setTimeout(RNRestart.Restart, 0);

      return;
    }

    const timeout = setTimeout(() => {
      messaging()
        .requestPermission()
        .then(async () => {
          return messaging().getToken();
        })
        .then(async (token) => {
          try {
            if (token && savedToken === '') {
              const deviceID = getUniqueId();
              const {country, ip} = await getCountry();

              // Send device data to server. API/index.ts
              // const newDevice = await createDevice<Device>({
              //   deviceID,
              //   country,
              //   token,
              //   language,
              //   platform: Platform.OS,
              // });

              const newDevice: Device = {
                _id: 'ID',
                token: 'TOKEN',
                country,
                deviceID,
                alerts: true,
                vibrate: true,
                sound: true,
                infected: false,
                isolation: false,
                language,
                verified: false,
                name: 'NAME',
                email: 'EMAIL@EMAIL.COM',
                mobile: '+0000000000000',
                appleID: 'AID',
                fbID: 'FID',
                googleID: 'GID',
                platform: Platform.OS,
              };

              dispatch(updateToken(token, deviceID, newDevice, country, ip));

              await getCountryStats<{data: CountryStats}>(country).then(
                (stats) => {
                  dispatch(updateStats(stats.data));
                },
              );

              replace(
                !loggedIn
                  ? 'Register'
                  : newDevice?.verified
                  ? 'Home'
                  : 'Verify',
              );
            } else {
              await getCountryStats<{data: CountryStats}>(device?.country).then(
                (stats) => {
                  dispatch(updateStats(stats.data));
                },
              );

              replace(
                !loggedIn ? 'Register' : device?.verified ? 'Home' : 'Verify',
              );
            }
          } catch (error) {
            ThrowError();
          }
        });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={{alignItems: 'center'}}>
        <CustomText
          text={t('caption')}
          color={Colors.white}
          fontFamily={Fonts.bold}
          size={Fonts.l}
          align="center"
          style={{paddingHorizontal: 80, textTransform: 'uppercase'}}
        />
        <CustomText
          text="Coronavirus (COVID-19)"
          color={Colors.yellow}
          fontFamily={Fonts.regular}
          size={Fonts.sm}
          align="center"
          style={{marginVertical: 15}}
        />
        {device?.country ? (
          <Flag
            value={device?.country}
            width={50}
            style={{borderRadius: 5, overflow: 'hidden'}}
          />
        ) : (
          <ActivityIndicator
            animating={!device?.country}
            size={'large'}
            color={Colors.white}
          />
        )}
      </View>
      <CustomText
        text=""
        color={Colors.white}
        fontFamily={Fonts.regular}
        size={Fonts.sm}
        align="center"
        style={{marginBottom: 20}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.darkBlue,
    ...Platform.select({
      android: {
        paddingTop: 30,
      },
    }),
  },
  logo: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
});

export default connector(Splash);
