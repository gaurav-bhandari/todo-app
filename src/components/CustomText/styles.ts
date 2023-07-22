import {StyleSheet} from 'react-native';

import {normalize, fonts, colors} from '@src/config';

export const styles = StyleSheet.create({
  text16: {
    ...fonts.regular,
    fontSize: normalize(16),
    lineHeight: normalize(23),
    color: colors.black,
  },

  text20: {
    ...fonts.regular,
    fontSize: normalize(20),
    lineHeight: normalize(28),
    color: colors.black,
  },

  text24: {
    ...fonts.regular,
    fontSize: normalize(24),
    lineHeight: normalize(26),
    color: colors.black,
  },

  text28: {
    ...fonts.regular,
    fontSize: normalize(28),
    lineHeight: normalize(38),
    color: colors.black,
  },

  text32: {
    ...fonts.regular,
    fontSize: normalize(32),
    lineHeight: normalize(44),
    color: colors.black,
  },

  text36: {
    ...fonts.regular,
    fontSize: normalize(36),
    lineHeight: normalize(50),
    color: colors.black,
  },
});
