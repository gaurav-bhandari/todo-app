import React from 'react';
import {Image, Pressable, View, ViewStyle} from 'react-native';

import {styles} from '@src/components/CustomTaskCard/styles';
import {Text16, Text24} from '@src/components/CustomText';
import {colors, commonStyles, normalize, translation} from '@src/config';

import DottedNotebook from '@src/assets/images/dotted-notebook.png';
import CustomButton from '@src/components/CustomButton';

type Props = {
  title: string;
  time: string;
  details: string;
  onCardPress: any;
  onCompletePress?: any;
  onIgnorePress?: any;
  isCardOpened: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  taskCardStyle?: ViewStyle;
};

const CustomTaskCard = ({
  title,
  onCardPress,
  onCompletePress,
  onIgnorePress,
  isCardOpened,
  time,
  details,
  disabled,
  isLoading,
  taskCardStyle,
}: Props) => {
  return (
    <>
      <Pressable
        onPress={onCardPress}
        style={({pressed}) => [
          styles.taskCard,
          taskCardStyle,
          !isCardOpened && {paddingBottom: normalize(22)},
        ]}>
        <View style={styles.titleWrapper}>
          <Text24 type="SB" color={colors.violetsAreBlue}>
            {title}
          </Text24>

          <Image
            source={DottedNotebook}
            resizeMode="contain"
            style={styles.dottedNotebook}
          />
        </View>

        {isCardOpened && (
          <Text16
            type="M"
            color={colors.stormcloud}
            style={[commonStyles.textAlignLeft, commonStyles.mt15]}>
            {`\u2B24 ${details}`}
          </Text16>
        )}

        <Text16
          type="SB"
          color={colors.lightSilver}
          style={[commonStyles.textAlignLeft, commonStyles.mt10]}>
          {time}
        </Text16>
      </Pressable>
      {isCardOpened && (
        <View style={styles.btnsWrapper}>
          <CustomButton
            title={translation.ignore}
            onPress={onIgnorePress}
            btnStyle={{...styles.btnStyle, ...styles.redBg}}
            textSize="M"
            disabled={disabled}
            isLoading={isLoading}
          />

          <CustomButton
            title={translation.complete}
            onPress={onCompletePress}
            btnStyle={{...styles.btnStyle, ...styles.greenBg}}
            textSize="M"
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      )}
    </>
  );
};

export default CustomTaskCard;
