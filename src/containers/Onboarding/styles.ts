import {StyleSheet} from 'react-native';

import {colors, normalize} from '@src/config';

export const styles = StyleSheet.create({
  onboardingBg: {
    height: '92%',
  },

  pressable: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: normalize(70),
  },

  ellipse: {
    height: normalize(61),
    width: normalize(61, 'width'),
  },

  arrowCircleRight: {
    height: normalize(40),
    width: normalize(40, 'width'),
    alignSelf: 'center',
    position: 'absolute',
    bottom: normalize(10),
  },

  appNameWrapper: {
    height: normalize(33),
    width: normalize(115, 'width'),
    borderRadius: 12,
    backgroundColor: colors.lavenderBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: normalize(24, 'width'),
    marginTop: normalize(45),
  },

  appNameText: {
    textTransform: 'uppercase',
  },

  dataAnalysisCaseStudy: {
    height: '52%',
    width: '100%',
  },
});
