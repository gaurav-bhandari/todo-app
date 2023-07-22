import {StyleSheet} from 'react-native';

import {colors, normalize} from '@src/config';

export const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 44,
    backgroundColor: colors.violetsAreBlue,
    height: normalize(62),
    justifyContent: 'center',
    alignItems: 'center',
  },

  opacityPointSeven: {
    opacity: 0.7,
  },

  opacityOne: {
    opacity: 1,
  },
});
