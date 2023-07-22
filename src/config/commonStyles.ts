import {StyleSheet} from 'react-native';

import {normalize} from '@src/config/normalize';

export const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },

  textAlignCenter: {
    textAlign: 'center',
  },

  textAlignLeft: {
    textAlign: 'left',
  },

  jcfe: {
    justifyContent: 'flex-end',
  },

  mt5: {
    marginTop: normalize(5),
  },

  mt10: {
    marginTop: normalize(10),
  },

  mt15: {
    marginTop: normalize(15),
  },

  mt34: {
    marginTop: normalize(34),
  },

  mb40: {
    marginBottom: normalize(40),
  },

  ml7: {
    marginLeft: normalize(7, 'width'),
  },

  ml21: {
    marginLeft: normalize(21, 'width'),
  },

  ml36: {
    marginLeft: normalize(36, 'width'),
  },
});
