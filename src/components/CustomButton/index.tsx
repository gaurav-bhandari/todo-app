import React from 'react';
import {ActivityIndicator, Pressable, ViewStyle} from 'react-native';

import {styles} from '@src/components/CustomButton/styles';
import {Text16, Text28} from '@src/components/CustomText';
import {colors} from '@src/config';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  btnStyle?: ViewStyle;
  textSize?: string;
};

const CustomButton = ({
  title,
  onPress,
  disabled,
  isLoading,
  btnStyle,
  textSize = 'L',
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || isLoading}
      style={({pressed}) => [
        {
          opacity: pressed || disabled ? 0.7 : 1,
        },
        styles.btnStyle,
        btnStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : textSize === 'L' ? (
        <Text28
          type="B"
          color={colors.white}
          style={[disabled ? styles.opacityPointSeven : styles.opacityOne]}>
          {title}
        </Text28>
      ) : (
        <Text16
          type="SB"
          color={colors.white}
          style={[disabled ? styles.opacityPointSeven : styles.opacityOne]}>
          {title}
        </Text16>
      )}
    </Pressable>
  );
};

export default CustomButton;
