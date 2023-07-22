import {StyleSheet} from 'react-native';

import {colors, fonts, normalize} from '@src/config';

export const styles = StyleSheet.create({
  container: {},

  textInput: {
    borderRadius: 44,
    backgroundColor: colors.aliceBlue,
    borderWidth: 7,
    borderColor: colors.white,
    paddingHorizontal: normalize(20),
    color: colors.feldgrau,
    ...fonts.medium,
  },
});
