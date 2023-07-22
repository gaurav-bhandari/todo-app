import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Text20} from '@src/components/CustomText';
import {colors, commonStyles} from '@src/config';
import {styles} from '@src/components/CustomTextInput/styles';

type Props = {
  label: string;
  textInputStyle?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
};

const CustomTextInput = ({
  label,
  textInputStyle,
  containerStyle,
  ...props
}: Props & TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text20 type="SB" color={colors.indigoRainbow} style={commonStyles.ml7}>
        {label}
      </Text20>
      <TextInput style={[styles.textInput, textInputStyle]} {...props} />
    </View>
  );
};

export default CustomTextInput;
