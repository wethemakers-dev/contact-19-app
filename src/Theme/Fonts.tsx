import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export default {
  bold: 'Montserrat-Bold',
  regular: 'Montserrat-Regular',
  extraBold: 'Montserrat-ExtraBold',
  xxsm: normalize(10),
  xsm: normalize(12),
  sm: normalize(14),
  md: normalize(16),
  lg: normalize(18),
  l: normalize(20),
  xl: normalize(22),
  xxl: normalize(24),
  xxxl: normalize(28),
};
