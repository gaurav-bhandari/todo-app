import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

import {fonts} from '@src/config';
import {styles} from '@src/components/CustomText/styles';

type Props = {
  color?: string;
  style?: TextStyle;
  size?: string;
  type?: string;
};

const getFontFamily = (type: string | undefined) => {
  let family = {...fonts.regular};
  if (type) {
    if (type === 'M') {
      family = {...fonts.medium};
    }

    if (type === 'SB') {
      family = {...fonts.semiBold};
    }

    if (type === 'B') {
      family = {...fonts.bold};
    }
  }
  return family;
};

export const Text16 = ({style, color, type, ...props}: Props & TextProps) => {
  const family = getFontFamily(type);
  return (
    <Text
      style={[styles.text16, style, color ? {color: color} : null, {...family}]}
      {...props}
    />
  );
};

export const Text20 = ({style, color, type, ...props}: Props & TextProps) => {
  const family = getFontFamily(type);
  return (
    <Text
      style={[styles.text20, style, color ? {color: color} : null, {...family}]}
      {...props}
    />
  );
};

export const Text24 = ({style, color, type, ...props}: Props & TextProps) => {
  const family = getFontFamily(type);
  return (
    <Text
      style={[styles.text24, style, color ? {color: color} : null, {...family}]}
      {...props}
    />
  );
};

export const Text28 = ({style, color, type, ...props}: Props & TextProps) => {
  const family = getFontFamily(type);
  return (
    <Text
      style={[styles.text28, style, color ? {color: color} : null, {...family}]}
      {...props}
    />
  );
};

export const Text32 = ({style, color, type, ...props}: Props & TextProps) => {
  const family = getFontFamily(type);
  return (
    <Text
      style={[styles.text32, style, color ? {color: color} : null, {...family}]}
      {...props}
    />
  );
};

export const Text36 = ({style, color, type, ...props}: Props & TextProps) => {
  const family = getFontFamily(type);
  return (
    <Text
      style={[styles.text36, style, color ? {color: color} : null, {...family}]}
      {...props}
    />
  );
};
