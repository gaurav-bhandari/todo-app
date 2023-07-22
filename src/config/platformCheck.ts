import {Platform, Dimensions} from 'react-native';

export const isIos = Platform.OS === 'ios' ? true : false;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('screen');

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
