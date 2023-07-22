import React from 'react';
import {Image, ImageBackground, Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from '@src/containers/Onboarding/styles';
import {AuthStackParamList} from '@src/navigation/types';
import {colors, commonStyles, translation} from '@src/config';
import {Text16, Text28} from '@src/components/CustomText';

import OnboardingBgImg from '@src/assets/images/onboarding-bg.png';
import Ellipse from '@src/assets/images/ellipse.png';
import ArrowCircleRight from '@src/assets/images/arrow-circle-right.png';
import DataAnalysisCaseStudy from '@src/assets/images/data-analysis-case-study.png';

type NavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  'Onboarding'
>;

const Onboarding = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <LinearGradient
        colors={[
          colors.white,
          colors.aliceBlue,
          colors.aliceBlue,
          colors.violetsAreBlue,
        ]}
        locations={[0, 0.5885, 0.5938, 1]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={commonStyles.flex1}>
        <ImageBackground
          source={OnboardingBgImg}
          resizeMode="stretch"
          style={styles.onboardingBg}>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate('SignUp')}>
            <Image
              source={Ellipse}
              resizeMode="contain"
              style={styles.ellipse}
            />

            <Image
              source={ArrowCircleRight}
              resizeMode="contain"
              style={styles.arrowCircleRight}
            />
          </Pressable>

          <View style={styles.appNameWrapper}>
            <Text16 type="SB" style={styles.appNameText}>
              {translation.taskoo}
            </Text16>
          </View>

          <Image
            source={DataAnalysisCaseStudy}
            resizeMode="contain"
            style={styles.dataAnalysisCaseStudy}
          />

          <Text28
            type="B"
            color={colors.indigoRainbow}
            style={commonStyles.textAlignCenter}>
            {translation.onboardingTitle}
          </Text28>

          <Text16
            type="SB"
            color={colors.persianBlue}
            style={[commonStyles.textAlignCenter, commonStyles.mt5]}>
            {translation.onboardingSubtitle}
          </Text16>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Onboarding;
