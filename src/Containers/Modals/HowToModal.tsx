import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, I18nManager, Image, Platform, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CustomText from '../../Components/Text';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import {Slides} from './Slides';

type HowToModalProps = {};

const {width} = Dimensions.get('window');

const HowToModal: React.FC<HowToModalProps> = () => {
  const [slide, setSlide] = useState(0);
  const {t} = useTranslation();

  return (
    <View>
      <Carousel
        data={
          Platform.OS === 'android' && I18nManager.isRTL
            ? [...Slides].reverse()
            : Slides
        }
        sliderWidth={width * 0.9 * 0.9 - 40}
        itemWidth={width * 0.9 * 0.9 - 40}
        onSnapToItem={setSlide}
        slideStyle={{
          marginVertical: 20,
        }}
        inactiveSlideScale={0.6}
        inactiveSlideOpacity={1}
        activeSlideAlignment={'start'}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}>
            <CustomText
              text={t(item.title)}
              fontFamily={Fonts.bold}
              size={Fonts.md}
              align="center"
              style={{textTransform: 'capitalize'}}
              color={Colors.darkBlue}
            />
            {item.soon && (
              <CustomText
                text={t('coming-soon')}
                fontFamily={Fonts.regular}
                size={Fonts.sm}
                align="center"
                color={Colors.blue}
              />
            )}
            <Image source={item.image} style={{marginVertical: 20}} />
            <CustomText
              text={t(item.subtitle)}
              fontFamily={Fonts.regular}
              size={Fonts.sm}
              align="center"
              style={{paddingHorizontal: 20}}
              color={Colors.darkBlue}
            />
          </View>
        )}
      />

      <Pagination
        dotsLength={Slides.length}
        activeDotIndex={slide}
        containerStyle={{
          margin: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
        dotContainerStyle={{
          marginHorizontal: 5,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: Colors.darkBlue,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

export default HowToModal;
