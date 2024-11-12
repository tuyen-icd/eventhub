import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const ipadRatio = {
  width: 1080,
  height: 1920,
};

export const HEIGHT_SCREEN = Dimensions.get('window').height;
export const WIDTH_SCREEN = Dimensions.get('window').width;

const scaleDimentions = {
  small: 1600,
  medium: 500, //1024,
};

export const isTablet = DeviceInfo.isTablet();

const [_, longDimension] = WIDTH_SCREEN < HEIGHT_SCREEN ? [WIDTH_SCREEN, HEIGHT_SCREEN] : [HEIGHT_SCREEN, WIDTH_SCREEN];

export const scale = (value: number) => {
  const scaleBy = isTablet ? scaleDimentions.small : scaleDimentions.medium;
  return Math.round(value * (WIDTH_SCREEN / scaleBy));
};

export const scaleVertical = (value: number) => {
  return value * (HEIGHT_SCREEN / ipadRatio.height);
};

export const scaleHorizontal = (value: number) => {
  return value * (WIDTH_SCREEN / ipadRatio.width);
};

export const verticalScale = (size: number) => (longDimension / ipadRatio.height) * size;

export const scaleModerate = (size: number, factor = 0.4) => Math.round(size + (verticalScale(size) - size) * factor);

const φ = (1 + Math.sqrt(5)) / 2;
export const MAX_HEADER_HEIGHT = HEIGHT_SCREEN * (1 - 1 / φ);
