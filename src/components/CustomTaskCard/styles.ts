import {StyleSheet} from 'react-native';

import {WINDOW_WIDTH, colors, normalize} from '@src/config';

export const styles = StyleSheet.create({
  taskCard: {
    borderRadius: 30,
    backgroundColor: colors.white,
    padding: normalize(22),
    paddingBottom: normalize(72),
    marginBottom: normalize(11),
  },

  dottedNotebook: {
    height: normalize(60),
    width: normalize(60, 'width'),
    marginLeft: normalize(20, 'width'),
  },

  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnStyle: {
    borderRadius: 44,
    height: normalize(32),
    width: normalize(125, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  redBg: {
    backgroundColor: colors.redPigment,
  },

  greenBg: {
    backgroundColor: colors.persianGreen,
  },

  btnsWrapper: {
    position: 'absolute',
    width: WINDOW_WIDTH - 88,
    left: 22,
    bottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },

  opacityPointSeven: {
    opacity: 0.7,
  },

  opacityOne: {
    opacity: 1,
  },
});
