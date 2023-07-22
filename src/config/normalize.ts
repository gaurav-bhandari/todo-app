import {PixelRatio} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@src/config/platformCheck';

// based on iphone X's scale at a density of 3x
const wscale = WINDOW_WIDTH / 375;
const hscale = WINDOW_HEIGHT / 812;

export function normalize(size: number, based: string = 'height') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
