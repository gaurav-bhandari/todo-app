import {StyleSheet} from 'react-native';

import {colors, normalize} from '@src/config';

export const styles = StyleSheet.create({
  homeBg: {
    height: '86%',
    justifyContent: 'flex-start',
    paddingHorizontal: normalize(22, 'width'),
  },

  profilePicture: {
    height: normalize(47),
    width: normalize(47, 'width'),
    marginLeft: normalize(37, 'width'),
  },

  btnStyle: {
    height: normalize(52),
    backgroundColor: colors.redPigment,
  },

  peep: {
    height: normalize(240),
    width: normalize(165, 'width'),
    marginTop: normalize(110),
    marginBottom: normalize(45),
    alignSelf: 'center',
  },
});
